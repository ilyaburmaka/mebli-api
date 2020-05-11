import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubRepository } from './sub.repository';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { CategoryRepository } from '../category/category.repository';
import { AssetsRepository } from '../assets/assets.repository';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(SubRepository)
    private readonly subRepository: SubRepository,
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
    @InjectRepository(AssetsRepository)
    private readonly assetsRepository: AssetsRepository,
  ) {}

  async geSubCategory() {
    return await this.subRepository.geSubCategory();
  }

  async geSubById(id: number) {
    const found = await this.subRepository.findOne({
      where: { id },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  async createSubCategory(subCategoryValues: CreateSubCategoryDto) {
    const category = await this.categoryRepository.findOne(
      subCategoryValues.categoryId,
    );
    const photo = await this.assetsRepository.findOne(
      subCategoryValues.photoId,
    );

    if (!category) {
      throw new NotFoundException(
        `Category with ID ${subCategoryValues.categoryId} not found`,
      );
    }

    if (!photo) {
      throw new NotFoundException(
        `Photo with ID ${subCategoryValues.photoId} not found`,
      );
    }

    return await this.subRepository.createSubCategory(
      subCategoryValues,
      category,
      photo
    );
  }

  async updateSub(subCategoryValues: CreateSubCategoryDto, id: number) {
    const sub = await this.geSubById(id);
    const category = await this.categoryRepository.findOne(
      subCategoryValues.categoryId,
    );

    return await this.subRepository.updateSubCategory(
      subCategoryValues,
      category,
      sub,
    );
  }

  async removeSub(id: number) {
    const result = await this.subRepository.delete({
      id,
    });

    if (!result.affected) {
      throw new NotFoundException(`SubCategory with ID ${id} not found`);
    }

    if (!!result.affected) {
      return true;
    }
  }
}
