import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';
import { AssetsRepository } from '../assets/assets.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    readonly productRepository: ProductRepository,
    readonly assetsRepository: AssetsRepository,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.productRepository.getProducts();
  }

  async createProduct(
    createProductEntity: CreateUpdateProductDto,
  ): Promise<Product> {
    console.log(createProductEntity);
    const assets = [];
    for (let i = 0; i < createProductEntity.assetIds.length; i++) {
      const res = await this.assetsRepository.findOneOrFail(
        createProductEntity.assetIds[i],
      );
      assets.push({ ...res });
    }
    console.log('assetsassets',assets);
    const data = await this.productRepository.createProduct(
      createProductEntity,assets
    );
    return data;
  }

  async getProduct(id: number): Promise<Product> {
    const found = await this.productRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return found;
  }
}
