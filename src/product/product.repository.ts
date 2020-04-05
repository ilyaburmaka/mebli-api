import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getProducts(): Promise<Product[]> {
    const query = this.createQueryBuilder('product');
    return await query.getMany();
  }

  async createProduct(createProductEntity: CreateUpdateProductDto) {
    const { categoryId, description, materials, name } = createProductEntity;
    const product = new Product();

    product.description = description;
    product.materials = materials;
    product.name = name;

    try {
      await product.save();
      return product;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async updateProduct() {
    return 1;
  }

  async removeProduct() {
    return 1;
  }
}
