import { BaseEntity } from 'typeorm';
import { SubCategory } from '../subcategory/sub.entity';
export declare class Product extends BaseEntity {
    id: number;
    name: string;
    nameRu: string;
    nameEn: string;
    image: string;
    materials: string;
    description: string;
    subcategories: SubCategory[];
}
