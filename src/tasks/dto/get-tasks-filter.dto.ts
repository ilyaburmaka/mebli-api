import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.OPEN])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
