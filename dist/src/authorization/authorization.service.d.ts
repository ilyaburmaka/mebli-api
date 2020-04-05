import { UserRepository } from './user.repository';
import { AuthorizationCredentialsDto } from './dto/authorization-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthorizationService {
    private userRepository;
    private jwtService;
    private logger;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authorizationCredentialsDto: AuthorizationCredentialsDto): Promise<void>;
    signIn(authorizationCredentialsDto: AuthorizationCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
