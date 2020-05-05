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
import { Asset } from '../assets/asset.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'name_rus' })
  nameRu: string;

  @Column({ name: 'name_eng' })
  nameEn: string;

  @Column({ name: 'materials_ua' })
  materials: string;

  @Column({ name: 'materials_rus' })
  materialsRus: string;

  @Column({ name: 'materials_eng' })
  materialsEng: string;

  @Column({ name: 'description_ua' })
  description: string;

  @Column({ name: 'description_rus' })
  descriptionRus: string;

  @Column({ name: 'description_eng' })
  descriptionEng: string;

  @ManyToMany(
    type => SubCategory,
    subcategory => subcategory.products,
    { eager: false },
  )
  subcategories: SubCategory[];

  @OneToMany(
    type => Asset,
    asset => asset.product,
    { eager: false },
  )
  photos: Asset[];

  // @OneToMany(
  //   type => Category,
  //   category => category.products,
  //   { eager: false },
  // )
  // category: Category;
}
