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

  @Column({ name: 'name_ua', nullable: true })
  name: string;

  @Column({ name: 'name_rus', nullable: true })
  nameRu: string;

  @Column({ name: 'name_eng', nullable: true })
  nameEn: string;

  @Column({ nullable: true })
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
