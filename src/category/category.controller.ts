import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCategory(@Body() categoryValues: CreateCategoryDto): Promise<Category> {
    return this.categoryService.categoryCreate(categoryValues);
  }
}
