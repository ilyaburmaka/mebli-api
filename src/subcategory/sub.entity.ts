import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';
import { Asset } from '../assets/asset.entity';

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

  @OneToOne(
    type => Asset,
    asset => asset.subcategory,
  )
  @JoinColumn()
  photo: Asset;

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
