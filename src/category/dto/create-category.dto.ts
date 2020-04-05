import { IsNotEmpty } from 'class-validator';
import { CategoryTypeEnum } from '../../category/category.type.enum';

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: CategoryTypeEnum;
}
