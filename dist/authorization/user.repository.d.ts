import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthorizationCredentialsDto } from './dto/authorization-credentials.dto';
export declare class UserRepository extends Repository<User> {
    signUp(authorizationCredentialsDto: AuthorizationCredentialsDto): Promise<void>;
    validateUserPass(authorizationCredentialsDto: AuthorizationCredentialsDto): Promise<string>;
    private hashPass;
}
