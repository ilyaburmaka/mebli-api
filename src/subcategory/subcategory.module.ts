import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationModule } from '../authorization/authorization.module';
import { SubRepository } from './sub.repository';
import { CategoryService } from '../category/category.service';
import { CategoryRepository } from '../category/category.repository';
import { AssetsRepository } from '../assets/assets.repository';
import { AssetsService } from '../assets/assets.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    TypeOrmModule.forFeature([
      SubRepository,
      CategoryRepository,
      AssetsRepository,
    ]),
    AuthorizationModule,
  ],
  providers: [SubcategoryService, CategoryService, AssetsService],
  controllers: [SubcategoryController],
})
export class SubcategoryModule {}
