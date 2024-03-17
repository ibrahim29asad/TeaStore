
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50,
    duration: '30s', 
};

export default function () {
    
    let loginRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/loginAction', {
        referer: 'http://10.1.12.111:8080/tools.descartes.teastore.webui/login',
        username: 'user2',
        password: 'password',
        signin: 'Sign in',
    });
    check(loginRes, {
        'is status 302': (r) => r.status === 302,
    });

    
    let homeRes = http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/');
    check(homeRes, {
        'is status 200': (r) => r.status === 200,
    });

   
    let categoryRes = http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/category?category=2&page=1');
    check(categoryRes, {
        'is status 200': (r) => r.status === 200,
    });

    
    let addToCartRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/cartAction', {
        productid: '7',
        addToCart: 'Add to Cart',
    });
    check(addToCartRes, {
        'is status 302': (r) => r.status === 302,
    });


    let cartRes = http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/cart');
    check(cartRes, {
        'is status 200': (r) => r.status === 200,
    });

   
    let updateCartRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/cartAction', {
        productid: '7',
        orderitem_7: '2',
        updateCartQuantities: 'Update Cart',
    });
    check(updateCartRes, {
        'is status 302': (r) => r.status === 302,
    });

    // Simulate a user thinking time of 1 second after interactions
    sleep(1);
}
