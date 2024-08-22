import { Injectable } from '@nestjs/common';
import { CreateHistoryRewardDto } from './dto/create-history_reward.dto';
import { UpdateHistoryRewardDto } from './dto/update-history_reward.dto';

@Injectable()
export class HistoryRewardService {
  create(createHistoryRewardDto: CreateHistoryRewardDto) {
    return 'This action adds a new historyReward';
  }

  findAll() {
    return `This action returns all historyReward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historyReward`;
  }

  update(id: number, updateHistoryRewardDto: UpdateHistoryRewardDto) {
    return `This action updates a #${id} historyReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} historyReward`;
  }
}
