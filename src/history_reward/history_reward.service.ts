import { Injectable } from '@nestjs/common';
import { CreateHistoryRewardDto } from './dto/create-history_reward.dto';
import { UpdateHistoryRewardDto } from './dto/update-history_reward.dto';
import { HistoryReward } from './entities/history_reward.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class HistoryRewardService {
  constructor(
    @InjectRepository(HistoryReward)
    private historyRewardRepository: Repository<HistoryReward>,
  ) {}
  create(createHistoryRewardDto: CreateHistoryRewardDto) {
    return this.historyRewardRepository.save(createHistoryRewardDto);
  }

  findAll() {
    return this.historyRewardRepository.find();
  }

  findOne(historyRewardId: number) {
    return this.historyRewardRepository.findOne({
      where: { historyRewardId },
    });
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
