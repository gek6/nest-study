import { Controller, Get, Post } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  list(){
    return 'list'
  }
  
}
