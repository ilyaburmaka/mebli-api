import { Injectable } from '@nestjs/common';
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

  async categoryCreate(categoryValues: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.createCategory(categoryValues);
  }
}
