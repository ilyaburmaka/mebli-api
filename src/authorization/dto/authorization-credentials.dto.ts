import {
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthorizationCredentialsDto {
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  username: string;

  @IsString()
  password: string;
}
