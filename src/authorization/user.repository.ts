import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { AuthorizationCredentialsDto } from './dto/authorization-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(
    authorizationCredentialsDto: AuthorizationCredentialsDto,
  ): Promise<void> {
    const { username, password } = authorizationCredentialsDto;

    const user = new User();

    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPass(password, user.salt);

    try {
      await user.save();
    } catch (e) {
      if (e.code === 23505) {
        throw new ConflictException('user name already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPass(
    authorizationCredentialsDto: AuthorizationCredentialsDto,
  ): Promise<string> {
    const { username, password } = authorizationCredentialsDto;
    const user = await this.findOne({ username });

    if (user && (await user.validatePassword(password))) {
      return user.username;
    } else {
      return null;
    }
  }

  private async hashPass(pass: string, salt: string): Promise<string> {
    return bcrypt.hash(pass, salt);
  }
}
