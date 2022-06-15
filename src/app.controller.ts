import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  getAll(): string {
    return 'This returns all cats';
  }

  @Get(':name')
  showName(@Param('name') paramName: string): string {
    return paramName;
  }
}
