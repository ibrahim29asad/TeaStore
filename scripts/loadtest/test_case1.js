import http from 'k6/http';
import { group, sleep } from 'k6';

const BASE_URL = `http://10.1.4.32:8080/tools.descartes.teastore.webui`;

const groupResponseTimes = {};


export const options = {
    discardResponseBodies: true,
    scenarios: {
        initialBrowse: {
            executor: 'shared-iterations',
            vus: 10,
            iterations: 200,
            maxDuration: '300s',
        },  
        increaseIterations: {
            executor: 'shared-iterations',
            vus: 10,
            iterations: 400,
            maxDuration: '600s',
        },
        increaseVUs: {
            executor: 'shared-iterations',
            vus: 50,
            iterations: 200,
            maxDuration: '300s',
        },
        // increaseIterations2: {
        //     executor: 'shared-iterations',
        //     vus: 10,
        //     iterations: 800,
        //     maxDuration: '120s',
        // },
        // increaseVUs2: {
        //     executor: 'shared-iterations',
        //     vus: 100,
        //     iterations: 200,
        //     maxDuration: '30s',
        // },
    },
};

export default function () {
    group('Black Tea Category Browse', () => {
        const start = new Date();
        http.get(`${BASE_URL}/category?category=2&page=1`);
        const end = new Date();
        const duration = end - start;
        groupResponseTimes['Black Tea Category Browse'] = (groupResponseTimes['Black Tea Category Browse'] || 0) + duration;
        // Sleep time is 1000ms. Total iteration time is sleep + time to finish request.
        sleep(1);
    });
}
