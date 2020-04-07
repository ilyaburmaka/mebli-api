import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @Get()
  getSubCategories() {
    return this.subcategoryService.geSubCategory();
  }

  @Get('/:id')
  getSubCategory(@Param('id', ParseIntPipe) id: number) {
    return this.subcategoryService.geSubById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSubCategory(@Body() subCategoryValues: CreateSubCategoryDto) {
    return this.subcategoryService.createSubCategory(subCategoryValues);
  }

  @Post('/:id')
  @UsePipes(ValidationPipe)
  updateSubCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() subCategoryValues: CreateSubCategoryDto,
  ) {
    return this.subcategoryService.updateSub(subCategoryValues, id);
  }

  @Delete('/:id')
  removeSub(@Param('id', ParseIntPipe) id: number) {
    return this.subcategoryService.removeSub(id);
  }
}
