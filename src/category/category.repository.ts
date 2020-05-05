import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async getCategories(): Promise<Category[]> {
    const query = this.createQueryBuilder('category').leftJoinAndSelect("category.subcategory", "subcategory");

    return await query.getMany();
  }

  async createCategory(categoryValues: CreateCategoryDto): Promise<Category> {
    const category = new Category();

    category.name = categoryValues.name;
    category.nameRu = categoryValues.nameRu;
    category.nameEn = categoryValues.nameEn;
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
    const { name, type, nameEn, nameRu } = categoryValues;

    if (category.name !== name) {
      category.name = name;
    }
    if (category.nameEn !== nameEn) {
      category.nameEn = nameEn;
    }
    if (category.nameRu !== nameRu) {
      category.nameRu = nameRu;
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
