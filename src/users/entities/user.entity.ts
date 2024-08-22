import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
