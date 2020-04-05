import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthorizationCredentialsDto } from './dto/authorization-credentials.dto';
import { AuthorizationService } from './authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private authorizationService: AuthorizationService) {}

  @Post('/signup')
  async singUp(
    @Body(ValidationPipe)
    authorizationCredentialsDto: AuthorizationCredentialsDto,
  ): Promise<void> {
    await this.authorizationService.signUp(authorizationCredentialsDto);
  }

  @Post('/signin')
  async singIp(
    @Body(ValidationPipe)
    authorizationCredentialsDto: AuthorizationCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authorizationService.signIn(authorizationCredentialsDto);
  }
}
