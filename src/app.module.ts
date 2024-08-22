import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UesrsModule } from './uesrs/uesrs.module';
import { RewardsModule } from './rewards/rewards.module';
import { HistoryRewardModule } from './history_reward/history_reward.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UesrsModule, RewardsModule, HistoryRewardModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
