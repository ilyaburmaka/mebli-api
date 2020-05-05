import { BaseEntity } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../authorization/user.entity';
export declare class Task extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    userId: number;
    user: User;
}
