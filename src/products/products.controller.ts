import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
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
    @Get('/:id')
    getProduct(@Param('id') id: string){
        return this.productService.getSingleProduct(id)
    }
    @Delete('/:id')
    deleteProduct(@Param('id') id: string){
        return this.productService.deletePorduct(id)
    }
}
