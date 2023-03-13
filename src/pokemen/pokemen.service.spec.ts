import { Test, TestingModule } from '@nestjs/testing';
import { PokemenService } from './pokemen.service';

describe('PokemenService', () => {
  let service: PokemenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemenService],
    }).compile();

    service = module.get<PokemenService>(PokemenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
