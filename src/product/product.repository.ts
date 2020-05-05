import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getProducts(): Promise<Product[]> {
    const query = this.createQueryBuilder('product').leftJoinAndSelect("product.photos", "photos");
    return await query.getMany();
  }

  async createProduct(
    createProductEntity: CreateUpdateProductDto,
    assets: any,
  ) {
    const {
      description,
      materials,
      name,
      categoryId,
      materialsEng,
      materialsRus,
      nameEn,
      nameRu,
      descriptionEng,
      descriptionRus,
    } = createProductEntity;

    const product = new Product();
    product.name = name;
    product.nameRu = nameRu;
    product.nameEn = nameEn;
    product.materials = materials;
    product.materialsRus = materialsRus;
    product.materialsEng = materialsEng;
    product.description = description;
    product.descriptionRus = descriptionRus;
    product.descriptionEng = descriptionEng;
    product.photos = assets;

    try {
      await product.save();
      console.log(product);
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
