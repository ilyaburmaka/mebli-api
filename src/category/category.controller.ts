import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
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

  @Get('/:id')
  getCategory(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoryService.getCategory(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCategory(@Body() categoryValues: CreateCategoryDto): Promise<Category> {
    return this.categoryService.categoryCreate(categoryValues);
  }
}
