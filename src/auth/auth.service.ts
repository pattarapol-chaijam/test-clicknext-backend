import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const isMatch = password === user.userPassword;
    if (!isMatch) {
      throw new UnauthorizedException('passwords do not match');
    }

    const payload = { sub: user };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
