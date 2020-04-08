import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Entity()
export class SubCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @ManyToOne(
    type => Category,
    category => category.subcategory,
    { eager: false },
  )
  category: Category;

  @ManyToMany(
    type => Product,
    product => product.subcategories,
    { eager: false },
  )
  products: Product[];
}
