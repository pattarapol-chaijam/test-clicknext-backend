import { Reward } from 'src/rewards/entities/reward.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';

@Entity()
export class HistoryReward {
  @PrimaryGeneratedColumn()
  historyRewardId: number;

  @CreateDateColumn()
  historyRewardDate: Date;

  @Column()
  usersId: number;

  @Column()
  rewardsId: number;

  @ManyToOne(() => User, (user) => user.historyRewards)
  @JoinColumn({ name: 'usersId' })
  users: User;

  @ManyToOne(() => Reward, (reward) => reward.historyRewards)
  @JoinColumn({ name: 'rewardsId' })
  rewards: Reward;
}
