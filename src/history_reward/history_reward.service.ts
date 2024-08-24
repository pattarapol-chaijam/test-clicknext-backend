import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistoryRewardDto } from './dto/create-history_reward.dto';
import { UpdateHistoryRewardDto } from './dto/update-history_reward.dto';
import { HistoryReward } from './entities/history_reward.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Reward } from 'src/rewards/entities/reward.entity';
@Injectable()
export class HistoryRewardService {
  constructor(
    @InjectRepository(HistoryReward)
    private historyRewardRepository: Repository<HistoryReward>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Reward)
    private rewardRepository: Repository<Reward>,
  ) {}
  async create(createHistoryRewardDto: CreateHistoryRewardDto) {
    const user = await this.userRepository.findOneBy({
      userId: createHistoryRewardDto.usersId,
    });
    const reward = await this.rewardRepository.findOneBy({
      rewardId: createHistoryRewardDto.rewardsId,
    });
    const histoeyReward: HistoryReward = new HistoryReward();
    histoeyReward.users = user;
    histoeyReward.rewards = reward;

    return this.historyRewardRepository.save(histoeyReward);
  }

  findAll() {
    return this.historyRewardRepository.find();
  }

  async findById(userId: number) {
    const historyReward = await this.historyRewardRepository.find({
      where: { usersId: userId },
      relations: {
        users: true,
        rewards: true,
      },
    });
    if (!historyReward) {
      throw new NotFoundException('User reward not found');
    }
    console.log(userId);
    console.log(historyReward);
    return historyReward;
  }

  findHistory(userId: number, rewardId: number) {
    const historyReward = this.historyRewardRepository.find({
      where: { usersId: userId, rewardsId: rewardId },
      relations: {
        users: true,
        rewards: true,
      },
    });
    if (!historyReward) {
      throw new NotFoundException('User reward not found');
    }
    return historyReward;
  }

  async update(
    historyRewardId: number,
    updateRewardDto: UpdateHistoryRewardDto,
  ) {
    const reward = await this.historyRewardRepository.findOneBy({
      historyRewardId,
    });
    if (!reward) {
      throw new Error(`Reward with id ${historyRewardId} not found`);
    }
    const updatedRewad = { ...reward, ...updateRewardDto };

    return this.historyRewardRepository.save(updatedRewad);
  }

  remove(historyRewardId: number) {
    return `This action removes a #${historyRewardId} reward`;
  }
}
