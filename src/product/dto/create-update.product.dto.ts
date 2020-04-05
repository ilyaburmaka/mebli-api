import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUpdateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  materials: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
