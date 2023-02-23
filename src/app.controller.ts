/* 
Controller is a file that contains methods called actions reached via client API request to a specific route
Controller defined by classes and decorators
Decorates supply required metadata and allows Nest to create a routing map
*/

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
