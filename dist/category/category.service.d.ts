import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getCategories(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    categoryCreate(categoryValues: CreateCategoryDto): Promise<Category>;
    categoryUpdate(categoryValues: CreateCategoryDto, id: number): Promise<Category>;
    categoryDelete(id: number): Promise<boolean>;
}
