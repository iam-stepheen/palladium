import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { ProductsListQuery, createProduct } from '../dto/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async createProduct(payload: createProduct): Promise<Products> {
    return this.productsRepository.save(payload);
  }

  async allProducts(params: ProductsListQuery): Promise<Pagination<Products>> {
    const qb = this.productsRepository.createQueryBuilder('c');
    return paginate<Products>(qb, params);
  }

  async findOne(id: number): Promise<Products> {
    console.log(id, 'id');
    return this.productsRepository.findOne({ id });
  }
}
