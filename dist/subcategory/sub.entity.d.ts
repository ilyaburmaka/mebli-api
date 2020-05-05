import { BaseEntity } from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';
export declare class SubCategory extends BaseEntity {
    id: number;
    name: string;
    nameRu: string;
    nameEn: string;
    categoryId: number;
    category: Category;
    products: Product[];
}
