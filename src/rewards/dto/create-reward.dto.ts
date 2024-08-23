import { IsNotEmpty } from 'class-validator';

export class CreateRewardDto {
  @IsNotEmpty()
  rewardName: string;

  @IsNotEmpty()
  rewardDescription: string;

  @IsNotEmpty()
  rewardPaypoint: string;

  @IsNotEmpty()
  rewardImg: string;

  @IsNotEmpty()
  rewardAmount: number;
}
