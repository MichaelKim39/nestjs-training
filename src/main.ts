/* 
Nest aims to be platform agnostic
supports express and fastify HTTP platforms out of the box
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Pass {abortOnError: false} to throw errors instead of exiting app with code 1
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
