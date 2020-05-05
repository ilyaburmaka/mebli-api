import { EntityRepository, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Asset } from './asset.entity';

@EntityRepository(Asset)
export class AssetsRepository extends Repository<Asset> {
  async saveAsset(image: any): Promise<any> {
    const asset = new Asset();
    asset.contentType = image.mimetype;
    asset.name = image.filename;
    asset.size = image.size;
    asset.url = image.path;

    try {
      await asset.save();
      return asset;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async saveFiles(images: any[]): Promise<any> {
    let data = [];
    for (let i = 0; i < images.length; i++) {
      const res = await this.saveAsset(images[i]);
      data = [...data, res.id];
    }

    return await data;
  }


  async createCategory(categoryValues: any): Promise<Asset> {
    const category = new Asset();

    category.name = categoryValues.name;
    // category.nameRu = categoryValues.nameRu;
    // category.nameEn = categoryValues.nameEn;
    // category.type = categoryValues.type;

    try {
      await category.save();
      return category;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async updateCategory(categoryValues: any, category: Asset): Promise<Asset> {
    const { name, type, nameEn, nameRu } = categoryValues;

    if (category.name !== name) {
      category.name = name;
    }

    try {
      await category.save();
      return category;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
