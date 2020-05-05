import { Repository } from 'typeorm';
import { SubCategory } from './sub.entity';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { Category } from '../category/category.entity';
export declare class SubRepository extends Repository<SubCategory> {
    geSubCategory(): Promise<SubCategory[]>;
    createSubCategory(subCategoryValues: CreateSubCategoryDto, category: Category): Promise<SubCategory>;
    updateSubCategory(subCategoryValues: CreateSubCategoryDto, category: Category, subCategory: SubCategory): Promise<SubCategory>;
}
