import { AuthorizationCredentialsDto } from './dto/authorization-credentials.dto';
import { AuthorizationService } from './authorization.service';
export declare class AuthorizationController {
    private authorizationService;
    constructor(authorizationService: AuthorizationService);
    singUp(authorizationCredentialsDto: AuthorizationCredentialsDto): Promise<void>;
    singIp(authorizationCredentialsDto: AuthorizationCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
