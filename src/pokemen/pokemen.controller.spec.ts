import { Test, TestingModule } from '@nestjs/testing';
import { PokemenController } from './pokemen.controller';
import { PokemenService } from './pokemen.service';

describe('PokemenController', () => {
  let controller: PokemenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemenController],
      providers: [PokemenService],
    }).compile();

    controller = module.get<PokemenController>(PokemenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
