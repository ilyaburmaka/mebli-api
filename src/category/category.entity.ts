import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { CategoryTypeEnum } from './category.type.enum';
import { SubCategory } from '../subcategory/sub.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  type: CategoryTypeEnum;

  @OneToMany(
    type => SubCategory,
    sub => sub.category,
    { eager: true },
  )
  subcategory: SubCategory[];

  @OneToMany(
    type => Product,
    product => product.category,
    { eager: true },
  )
  products: Product[];
}
