import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async getCategories(): Promise<Category[]> {
    const query = this.createQueryBuilder('category');

    return await query.getMany();
  }

  async createCategory(categoryValues: CreateCategoryDto): Promise<Category> {
    const category = new Category();

    category.name = categoryValues.name;
    category.type = categoryValues.type;

    try {
      await category.save();
      return category;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async updateCategory(
    categoryValues: CreateCategoryDto,
    category: Category,
  ): Promise<Category> {
    const { name, type } = categoryValues;

    if (category.name !== name) {
      category.name = name;
    }

    if (category.type !== type) {
      category.type = type;
    }

    try {
      await category.save();
      return category;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
