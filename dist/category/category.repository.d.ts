import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryRepository extends Repository<Category> {
    getCategories(): Promise<Category[]>;
    createCategory(categoryValues: CreateCategoryDto): Promise<Category>;
    updateCategory(categoryValues: CreateCategoryDto, category: Category): Promise<Category>;
}
