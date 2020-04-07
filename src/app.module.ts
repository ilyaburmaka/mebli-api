import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthorizationModule } from './authorization/authorization.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { FeedbackModule } from './feedback/feedback.module';
import { SubcategoryModule } from './subcategory/subcategory.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthorizationModule,
    ProductModule,
    CategoryModule,
    FeedbackModule,
    SubcategoryModule,
  ],
})
export class AppModule {}
