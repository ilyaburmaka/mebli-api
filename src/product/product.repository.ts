import { EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  async getProducts() {
    const query = this.createQueryBuilder('product');
    return await query.getMany();

  }

  async createProduct() {}

  async updateProduct() {}

  async removeProduct() {}

}
