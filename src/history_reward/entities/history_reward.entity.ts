import { Reward } from 'src/rewards/entities/reward.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class HistoryReward {
  @PrimaryGeneratedColumn()
  historyRewardId: number;

  @CreateDateColumn()
  historyRewardDate: Date;

  @ManyToOne(() => User, (user) => user.historyRewards)
  users: User;

  @ManyToOne(() => Reward, (reward) => reward.historyRewards)
  rewards: Reward;
}
