import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../authorization/user.entity';
import { Task } from '../tasks/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    readonly productRepository: ProductRepository,
  ) {}

  async getProduct(id: number): Promise<ProductEntity> {
    const found = await this.productRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return found;
  }
}
