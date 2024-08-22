import { HistoryReward } from 'src/history_reward/entities/history_reward.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Reward {
  @PrimaryGeneratedColumn()
  rewardId: number;

  @Column()
  rewardName: string;

  @Column()
  rewardDescription: string;

  @Column()
  rewardPaypoint: string;

  @CreateDateColumn()
  rewardStartDate: Date;

  @UpdateDateColumn()
  rewardEndDate: Date;

  @Column()
  rewardImg: string;

  @Column()
  reward_amount: number;

  @OneToMany(() => HistoryReward, (historyReward) => historyReward.rewards)
  historyRewards: HistoryReward[];
}
