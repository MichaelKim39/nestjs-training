import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemenService } from './pokemen.service';
import { CreatePokemanDto } from './dto/create-pokeman.dto';
import { UpdatePokemanDto } from './dto/update-pokeman.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PokemanEntity } from './entities/pokeman.entity';

@Controller('pokemen')
@ApiTags('pokemen')
export class PokemenController {
  constructor(private readonly pokemenService: PokemenService) {}

  @Post()
  @ApiCreatedResponse({ type: PokemanEntity })
  create(@Body() createPokemanDto: CreatePokemanDto) {
    return this.pokemenService.create(createPokemanDto);
  }

  @Get()
  @ApiOkResponse({ type: PokemanEntity, isArray: true })
  findAll() {
    return this.pokemenService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PokemanEntity })
  findOne(@Param('id') id: string) {
    return this.pokemenService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PokemanEntity })
  update(@Param('id') id: string, @Body() updatePokemanDto: UpdatePokemanDto) {
    return this.pokemenService.update(+id, updatePokemanDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PokemanEntity })
  remove(@Param('id') id: string) {
    return this.pokemenService.remove(+id);
  }
}
