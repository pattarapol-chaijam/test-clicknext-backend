import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  userUsername: string;

  @IsNotEmpty()
  userPassword: string;

  @IsNotEmpty()
  userPoint: number;
}
