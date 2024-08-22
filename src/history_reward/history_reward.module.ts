import { Module } from '@nestjs/common';
import { HistoryRewardService } from './history_reward.service';
import { HistoryRewardController } from './history_reward.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryReward } from './entities/history_reward.entity';
import { User } from 'src/users/entities/user.entity';
import { Reward } from 'src/rewards/entities/reward.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryReward, User, Reward])],
  controllers: [HistoryRewardController],
  providers: [HistoryRewardService],
})
export class HistoryRewardModule {}
