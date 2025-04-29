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
        return this.prisma.product.create({data: newProduct});
    }
}
