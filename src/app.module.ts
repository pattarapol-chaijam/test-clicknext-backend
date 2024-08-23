import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryReward } from './history_reward/entities/history_reward.entity';
import { Reward } from './rewards/entities/reward.entity';
import { User } from './users/entities/user.entity';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { RewardsModule } from './rewards/rewards.module';
import { HistoryRewardModule } from './history_reward/history_reward.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    RewardsModule,
    HistoryRewardModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Reward, HistoryReward],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
