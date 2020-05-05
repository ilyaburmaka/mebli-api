import { SubcategoryService } from './subcategory.service';
import { CreateSubCategoryDto } from './dto/create-subcategory.dto';
export declare class SubcategoryController {
    private subcategoryService;
    constructor(subcategoryService: SubcategoryService);
    getSubCategories(): Promise<import("./sub.entity").SubCategory[]>;
    getSubCategory(id: number): Promise<import("./sub.entity").SubCategory>;
    createSubCategory(subCategoryValues: CreateSubCategoryDto): Promise<import("./sub.entity").SubCategory>;
    updateSubCategory(id: number, subCategoryValues: CreateSubCategoryDto): Promise<import("./sub.entity").SubCategory>;
    removeSub(id: number): Promise<boolean>;
}
