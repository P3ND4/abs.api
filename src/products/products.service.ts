import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

export interface IProduct{
    id: string,
    description: string,
    price: number,
    cost: number,
    stock: number,
    unit: string,
    category: string,
    image?: string
}

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    getAllProducts() {
        return this.prisma.product.findMany();
    }
    addProduct(newProduct: IProduct) {
        newProduct.image = newProduct.image? newProduct.image : "https://m.media-amazon.com/images/I/51C8JRX9DdL._AC_UL320_.jpg"
        return this.prisma.product.create({data: newProduct});
    }
}
