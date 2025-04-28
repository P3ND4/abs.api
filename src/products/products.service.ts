import { Injectable } from '@nestjs/common';

export interface IProduct{
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number
}

@Injectable()
export class ProductsService {
    private products = [
        {
            id: 1, 
            name: 'product1', 
            description: 'description1', 
            price: 100, 
            stock: 10
        }, 
        {
            id: 2, 
            name: 'product2', 
            description: 'description2', 
            price: 200, 
            stock: 20
        }
    ];
    getAllProducts() {
        return this.products;
    }
    addProduct(newProduct: IProduct) {
        this.products.push(newProduct);
        return newProduct;
    }
}
