import HTTP from './http';

export default class Service {

    async products() {
        return HTTP.get('/api/products');
    }

}
