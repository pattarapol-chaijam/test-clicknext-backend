import { Test, TestingModule } from '@nestjs/testing';
import { HistoryRewardController } from './history_reward.controller';
import { HistoryRewardService } from './history_reward.service';

describe('HistoryRewardController', () => {
  let controller: HistoryRewardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryRewardController],
      providers: [HistoryRewardService],
    }).compile();

    controller = module.get<HistoryRewardController>(HistoryRewardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
