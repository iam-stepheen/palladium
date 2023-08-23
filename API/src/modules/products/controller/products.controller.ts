import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from '../service/products.service';
import { ApiResponse } from '@nestjs/swagger';
import {
  GetProductsbyId,
  ProductsListQuery,
  createProduct,
} from '../dto/products.dto';
import { Products } from '../entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('')
  @ApiResponse({ status: 200, description: 'successfull' })
  async createProduct(@Body() payload: createProduct): Promise<any> {
    return this.productsService.createProduct(payload);
  }

  @Get('')
  @ApiResponse({ status: 200, description: 'successfull' })
  async allProducts(@Param() params: ProductsListQuery): Promise<any> {
    return this.productsService.allProducts(params);
  }

  @Get('getProductById')
  @ApiResponse({ status: 200, description: 'successfull' })
  async productById(@Query() params: GetProductsbyId): Promise<Products> {
    return this.productsService.findOne(params.id);
  }
}
