import { Module } from '@nestjs/common';
import { HistoryRewardService } from './history_reward.service';
import { HistoryRewardController } from './history_reward.controller';

@Module({
  controllers: [HistoryRewardController],
  providers: [HistoryRewardService],
})
export class HistoryRewardModule {}
