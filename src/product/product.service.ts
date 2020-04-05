import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    readonly productRepository: ProductRepository,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }

  async createProduct(
    createProductEntity: CreateUpdateProductDto,
  ): Promise<Product> {
    return await this.productRepository.createProduct(createProductEntity);
  }

  async getProduct(id: number): Promise<Product> {
    const found = await this.productRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return found;
  }
}
