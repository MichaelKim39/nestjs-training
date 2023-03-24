import { Pokeman, PokeType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { MOCK_POKEMEN } from 'src/utils/mocks/mock-pokemen';
import { CreatePokemanDto } from './dto/create-pokeman.dto';
import { PokemenController } from './pokemen.controller';
import { PokemenService } from './pokemen.service';

describe('PokemenController', () => {
  let pokemanController: PokemenController;
  let pokemanService: PokemenService;
  let prisma: PrismaService;

  beforeEach(() => {
    pokemanService = new PokemenService(prisma);
    pokemanController = new PokemenController(pokemanService);
  });

  describe('findAll pokemen', () => {
    it('should be defined', () => {
      expect(pokemanController).toBeDefined();
    });

    it('should return an array of pokemen', async () => {
      jest.spyOn(pokemanService, 'findAll').mockResolvedValue(MOCK_POKEMEN);
      expect(await pokemanController.findAll()).toBe(MOCK_POKEMEN);
    });
  });

  describe('create pokeman', () => {
    it('should be called with correct dto', async () => {
      // arrange - preparing data and environment before system interaction
      const pokemanDto: CreatePokemanDto = {
        name: 'test',
        type: [PokeType.BUG],
        hp: 1,
        speed: 1,
        abilityIds: [1],
      };
      jest.spyOn(pokemanService, 'create').mockResolvedValue({} as Pokeman);

      // act - interact with system
      await pokemanController.create(pokemanDto);

      // assert - check that system reacts as expected
      expect(pokemanService.create).toHaveBeenCalledWith(pokemanDto);
    });
  });
});
