import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HistoryRewardService } from './history_reward.service';
import { CreateHistoryRewardDto } from './dto/create-history_reward.dto';
import { UpdateHistoryRewardDto } from './dto/update-history_reward.dto';

@Controller('history-reward')
export class HistoryRewardController {
  constructor(private readonly historyRewardService: HistoryRewardService) {}

  @Post()
  create(@Body() createHistoryRewardDto: CreateHistoryRewardDto) {
    return this.historyRewardService.create(createHistoryRewardDto);
  }

  @Get()
  findAll() {
    return this.historyRewardService.findAll();
  }

  @Get(':userId')
  findById(@Param('userId') userId: number) {
    return this.historyRewardService.findById(userId);
  }

  @Get(':userId/:rewardId')
  findHistory(
    @Param('userId') userId: number,
    @Param('rewardId') rewardId: number,
  ) {
    return this.historyRewardService.findHistory(userId, rewardId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoryRewardDto: UpdateHistoryRewardDto,
  ) {
    return this.historyRewardService.update(+id, updateHistoryRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyRewardService.remove(+id);
  }
}
