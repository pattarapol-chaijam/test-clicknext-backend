import { HistoryReward } from 'src/history_reward/entities/history_reward.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  userName: string;

  @Column()
  userUsername: string;

  @Column()
  userPassword: string;

  @Column()
  userPoint: number;

  @OneToMany(() => HistoryReward, (historyReward) => historyReward.users)
  historyRewards: HistoryReward[];
}
