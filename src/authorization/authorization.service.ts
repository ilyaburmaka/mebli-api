import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorizationCredentialsDto } from './dto/authorization-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthorizationService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(
    authorizationCredentialsDto: AuthorizationCredentialsDto,
  ): Promise<void> {
    return this.userRepository.signUp(authorizationCredentialsDto);
  }

  async signIn(
    authorizationCredentialsDto: AuthorizationCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPass(
      authorizationCredentialsDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credential');
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
