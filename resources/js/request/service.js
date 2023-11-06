import HTTP from './http';

export default class Service {

    async getProducts() {
        return HTTP.get('/api/products');
    }

    async submitCart(data) {
        return HTTP.post('/api/cart', data);
    }

}
