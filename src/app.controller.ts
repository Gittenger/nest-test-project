import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

export class CreateCatDto {
  name: string;
  id: number;
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

  @Post('data')
  showData(@Body('name') name: string, @Body('id') id: number): string {
    return `The cat's name is ${name} and its id is ${id.toString()}`;
  }
}
