import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getAllUsers() {
    // tslint:disable-next-line:no-console
    console.log(123);
    return {
      code: 200,
      data: {},
      msg: 'ok',
    };
  }
}
