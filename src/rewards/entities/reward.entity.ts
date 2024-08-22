import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
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
}
