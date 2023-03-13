import { PartialType } from '@nestjs/swagger';
import { CreatePokemanDto } from './create-pokeman.dto';

export class UpdatePokemanDto extends PartialType(CreatePokemanDto) {}
