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
        newProduct.image = "https://www.amazon.com/-/es/Funny-Pitcher-personalizada-onzas-blanco/dp/B09DL8BYGY/ref=sr_1_38?crid=2YDTAYDZN1LWF&dib=eyJ2IjoiMSJ9.7xIN7fGNpelOrmL2rnNSIkSTYx_8CPalaTlnHw_eKiF8BhogTaHGIg5uP5igdmAtULDxmciw8IRx5c-8zy_bOqY8rJkhoUNCOAxfX6GIVWSxayrFRbwpXU9kHoLp8i9IjR9eJGlnuIwBRa9r-2MBzGwUZyKYndgzK7hFxm6qs3T4Y_R2nB_7_EyNDNLGtbqWIbdNAHPZUt5esEFiab6E86ZOgtj4MW5gJqD8SWkn_RYM4lKP1h2Qf6-ihDnERSrfgxNyJkUxMdU6c0Gq-0Ajohp1YX7CZyC-u4ozMTE2v_E.ZXCm9u8Czbokt0Bc0WxBnToPlhnEKKYoJBn6S9eb6vs&dib_tag=se&keywords=jarra+personalizada&qid=1746048557&sprefix=jarrra+personal%2Caps%2C736&sr=8-38"
        return this.prisma.product.create({data: newProduct});
    }
}
