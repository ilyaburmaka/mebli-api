import { BaseEntity } from 'typeorm';
import { CategoryTypeEnum } from './category.type.enum';
import { SubCategory } from '../subcategory/sub.entity';
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    nameRu: string;
    nameEn: string;
    type: CategoryTypeEnum;
    subcategory: SubCategory[];
}
