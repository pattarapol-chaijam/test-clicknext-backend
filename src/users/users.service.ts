import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(userId: number) {
    return this.userRepository.findOne({ where: { userId } });
  }

  findOneByUsername(userUsername: string) {
    return this.userRepository.findOne({ where: { userUsername } });
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { userId } });
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    user.userPoint = updateUserDto.userPoint;
    await this.userRepository.save(user);
    return user;
  }

  remove(userId: number) {
    return `This action removes a #${userId} user`;
  }
}
