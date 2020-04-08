import { EntityRepository, Repository } from 'typeorm';
import { SubCategory } from './sub.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { Category } from '../category/category.entity';

@EntityRepository(SubCategory)
export class SubRepository extends Repository<SubCategory> {
  async geSubCategory() {
    const query = this.createQueryBuilder('subcategory');
    try {
      const subs = await query.getMany();
      return subs;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createSubCategory(
    subCategoryValues: CreateSubCategoryDto,
    category: Category,
  ) {
    const { name } = subCategoryValues;
    const sub = new SubCategory();

    sub.name = name;
    sub.category = category;

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
    const { name, categoryId } = subCategoryValues;

    if (categoryId !== category.id) {
      subCategory.category = category;
    }

    if (subCategory.name !== name) {
      subCategory.name = name;
    }

    try {
      await subCategory.save();
      return subCategory;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}