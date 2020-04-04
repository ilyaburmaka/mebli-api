import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
