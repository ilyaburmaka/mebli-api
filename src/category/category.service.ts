import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }

  async getCategory(id: number): Promise<Category> {
    const found = await this.categoryRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  async categoryCreate(categoryValues: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(categoryValues);
  }

  async categoryUpdate(
    categoryValues: CreateCategoryDto,
    id: number,
  ): Promise<Category> {
    const category = await this.getCategory(id);

    return await this.categoryRepository.updateCategory(
      categoryValues,
      category,
    );
  }

  async categoryDelete(id: number): Promise<boolean> {
    const result = await this.categoryRepository.delete({
      id,
    });

    if (!result.affected) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    if (!!result.affected) {
      return true;
    }
  }
}
