import { CategoryTypeEnum } from '../category.type.enum';

export class CreateCategoryDto {
  name: string;

  nameRu: string;

  nameEn: string;

  type: CategoryTypeEnum;
}
