import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    createCategory(categoryValues: CreateCategoryDto): Promise<Category>;
    updateCategory(id: number, categoryValues: CreateCategoryDto): Promise<Category>;
    categoryDelete(id: number): Promise<boolean>;
}
