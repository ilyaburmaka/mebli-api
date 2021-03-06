import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from '../authorization/user.entity';
export declare class TasksService {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filerDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    getTaskById(id: number, user: User): Promise<Task>;
    deleteTaskById(id: number, user: User): Promise<boolean>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>;
}
