import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { MaxLength } from 'class-validator';
import { User } from '../authorization/user.entity';
import { SubCategory } from '../subcategory/sub.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @MaxLength(50)
  materials: string;

  @Column()
  description: string;

  @ManyToMany(
    type => SubCategory,
    subcategory => subcategory.products,
    { eager: false },
  )
  subcategories: SubCategory[];

  @OneToMany(
    type => Category,
    category => category.products,
    { eager: false },
  )
  category: Category;
}
