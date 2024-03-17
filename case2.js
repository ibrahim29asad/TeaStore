
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50,
    duration: '30s',
};

export default function () {
    

    let loginRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/loginAction', {
        referer: 'http://10.1.12.111:8080/tools.descartes.teastore.webui/login',
        username: 'user21',
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
   
    let categoryPage =
        http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/category?category=2&page=1', {
            category: '2',
            page: '1',
        });
        
    check(categoryRes, {
        'is status 200': (r) => r.status === 200,
    });

    
    let categoryPage =
        http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/category?category=2&page=1', {
            category: '2',
            page: '1',
            number : '3',
        });
        
    check(categoryRes, {
        'is status 302': (r) => r.status === 302,
    });

    
    let categoryPage =
        http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/category?category=2&page=1', {
            category: '2',
            page: '1',
        });
        
    check(categoryRes, {
        'is status 200': (r) => r.status === 200,
    });
    
    let categoryPage =
        http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/category?category=2&page=2', {
            category: '2',
            page: '2',
        });
        
    check(categoryRes, {
        'is status 200': (r) => r.status === 200,
    });
    
    
    let addToCartRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/cartAction', {
        productid: '55',
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
        productid: '55',
        orderitem_7: '24',
        updateCartQuantities: 'Update Cart',
    });
    check(updateCartRes, {
        'is status 302': (r) => r.status === 302,
    });

    let cartRes = http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/cart');
    check(cartRes, {
        'is status 200': (r) => r.status === 200,
    });

    
    let addToCartRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/cartAction', {
        productid: '47',
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
        productid: '55',
        orderitem_7: '24',
        productid: '47',
        orderitem_47: '1',
        removeProduct_47: '' ,
    });
    check(updateCartRes, {
        'is status 302': (r) => r.status === 302,
    });
    
    
    let cartRes = http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/cart');
    check(cartRes, {
        'is status 200': (r) => r.status === 200,
    });
    
    
    let PurchaseCartRes = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/cartAction', {
        productid: '55',
        orderitem_7: '24',
        proceedtoCheckout: 'Proceed to Checkout',
    });
    check(updateCartRes, {
        'is status 302': (r) => r.status === 302,
    });
    
    let order = http.get('http://10.1.12.111:8080/tools.descartes.teastore.webui/order');
    check(cartRes, {
        'is status 200': (r) => r.status === 200,
    });
    
    let ordersubmit = http.post('http://10.1.12.111:8080/tools.descartes.teastore.webui/cartAction', {
    firstname: 'Jon',
    lastname: 'Snow',
    address1: 'Winterfell',
    address2: '11111 The North, Westeros',
    cardtype: 'saab',
    cardnumber: '314159265359',
    expirydate: '12/2025',
    confirm: 'Confirm',
    });
    check(updateCartRes, {
        'is status 302': (r) => r.status === 302,
    });
    
    
    
    // Simulate a user thinking time of 1 second after interactions
    sleep(1);
}
