import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUpdateProductDto {
  name: string;
  nameRu: string;
  nameEn: string;
  materials: string;
  materialsRus: string;
  materialsEng: string;
  description: string;
  descriptionRus: string;
  descriptionEng: string;
  categoryId: number;
  assetIds: any[];
}
