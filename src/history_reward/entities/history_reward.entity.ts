import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class HistoryReward {
  @PrimaryGeneratedColumn()
  historyRewardId: number;
  @Column()
  userId: number;
  @Column()
  rewardId: number;
  @CreateDateColumn()
  historyRewardDate: Date;
}
