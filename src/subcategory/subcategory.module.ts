import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationModule } from '../authorization/authorization.module';
import { SubRepository } from './sub.repository';
import { CategoryService } from '../category/category.service';
import { CategoryRepository } from '../category/category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubRepository, CategoryRepository]),
    AuthorizationModule,
  ],
  providers: [SubcategoryService, CategoryService],
  controllers: [SubcategoryController],
})
export class SubcategoryModule {}
