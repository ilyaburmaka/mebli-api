import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
  Delete,
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

  @Post('/update/:id')
  @UsePipes(ValidationPipe)
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryValues: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.categoryUpdate(categoryValues, id);
  }

  @Delete('/:id')
  categoryDelete(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.categoryService.categoryDelete(id);
  }
}
