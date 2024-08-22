import { Module } from '@nestjs/common';
import { HistoryRewardService } from './history_reward.service';
import { HistoryRewardController } from './history_reward.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryReward } from './entities/history_reward.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryReward])],
  controllers: [HistoryRewardController],
  providers: [HistoryRewardService],
})
export class HistoryRewardModule {}
