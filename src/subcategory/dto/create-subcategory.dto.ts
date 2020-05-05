import { IsNotEmpty,  IsString } from 'class-validator';

export class CreateSubCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  nameRu: string;

  nameEn: string;

  @IsNotEmpty()
  categoryId: number;
}
