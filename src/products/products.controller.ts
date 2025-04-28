import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get('/all')
    getAllProducts() {
        return this.productService.getAllProducts();
    }
    @Post('/add')
    addProduct(@Body() product: any) {
        return this.productService.addProduct(product);
    }
}
