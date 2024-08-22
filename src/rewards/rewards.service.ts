import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reward } from './entities/reward.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RewardsService {
  constructor(
    @InjectRepository(Reward)
    private rewardRepository: Repository<Reward>,
  ) {}
  create(createRewardDto: CreateRewardDto) {
    return this.rewardRepository.save(createRewardDto);
  }

  findAll() {
    return this.rewardRepository.find();
  }

  findOne(rewardId: number) {
    return this.rewardRepository.findOne({ where: { rewardId } });
  }

  async update(rewardId: number, updateRewardDto: UpdateRewardDto) {
    const reward = await this.rewardRepository.findOneBy({ rewardId });
    if (!reward) {
      throw new Error(`Reward with id ${rewardId} not found`);
    }
    const updatedRewad = { ...reward, ...updateRewardDto };

    return this.rewardRepository.save(updatedRewad);
  }

  remove(rewardId: number) {
    return `This action removes a #${rewardId} reward`;
  }
}
