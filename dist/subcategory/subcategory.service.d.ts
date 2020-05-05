import { SubRepository } from './sub.repository';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
import { CategoryRepository } from '../category/category.repository';
export declare class SubcategoryService {
    private readonly subRepository;
    private readonly categoryRepository;
    constructor(subRepository: SubRepository, categoryRepository: CategoryRepository);
    geSubCategory(): Promise<import("./sub.entity").SubCategory[]>;
    geSubById(id: number): Promise<import("./sub.entity").SubCategory>;
    createSubCategory(subCategoryValues: CreateSubCategoryDto): Promise<import("./sub.entity").SubCategory>;
    updateSub(subCategoryValues: CreateSubCategoryDto, id: number): Promise<import("./sub.entity").SubCategory>;
    removeSub(id: number): Promise<boolean>;
}
