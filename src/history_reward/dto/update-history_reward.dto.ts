import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryRewardDto } from './create-history_reward.dto';

export class UpdateHistoryRewardDto extends PartialType(
  CreateHistoryRewardDto,
) {}
