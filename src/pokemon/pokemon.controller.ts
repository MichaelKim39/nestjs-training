import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { Request } from 'express';
import { MOCK_POKEMEN } from 'src/utils/mocks/mock-pokemen';
import { Pokemon } from 'src/utils/pokemon';

// Takes optional controller path prefix of pokemon
@Controller('pokemon')
export class PokemonController {
  // Get HTTP request decorator
  // Path string passed into decorator will define route map
  @Get()
  @HttpCode(200)
  // Define action
  // Name is not significant here, but must declare a method to bind route to
  findAll(@Req() request: Request): Pokemon[] {
    return MOCK_POKEMEN;
  }
}
