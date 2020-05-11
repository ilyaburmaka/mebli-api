import { EntityRepository, Repository } from 'typeorm';
import { SubCategory } from './sub.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { Category } from '../category/category.entity';
import { Asset } from '../assets/asset.entity';

@EntityRepository(SubCategory)
export class SubRepository extends Repository<SubCategory> {
  async geSubCategory() {
    const query = this.createQueryBuilder('subcategory');
    try {
      const subs = await query
        .leftJoinAndSelect('subcategory.photo', 'photo')
        .leftJoinAndSelect('subcategory.category', 'category')
        .getMany();

      return subs;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createSubCategory(
    subCategoryValues: CreateSubCategoryDto,
    category: Category,
    photo: Asset,
  ) {
    const { name, nameRu, nameEn } = subCategoryValues;
    const sub = new SubCategory();

    sub.name = name;
    sub.nameRu = nameRu;
    sub.nameEn = nameEn;
    sub.category = category;
    sub.photo = photo;

    try {
      await sub.save();
      return sub;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async updateSubCategory(
    subCategoryValues: CreateSubCategoryDto,
    category: Category,
    subCategory: SubCategory,
  ) {
    const { name, nameRu, nameEn, categoryId } = subCategoryValues;

    if (categoryId !== category.id) {
      subCategory.category = category;
    }

    if (subCategory.name !== name) {
      subCategory.name = name;
    }
    if (subCategory.nameRu !== nameRu) {
      subCategory.nameRu = nameRu;
    }

    if (subCategory.nameEn !== nameEn) {
      subCategory.nameEn = nameEn;
    }

    try {
      await subCategory.save();
      return subCategory;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
