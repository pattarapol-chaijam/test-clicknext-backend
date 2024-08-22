import { Test, TestingModule } from '@nestjs/testing';
import { HistoryRewardService } from './history_reward.service';

describe('HistoryRewardService', () => {
  let service: HistoryRewardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryRewardService],
    }).compile();

    service = module.get<HistoryRewardService>(HistoryRewardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
