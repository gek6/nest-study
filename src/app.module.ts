import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { StudyController } from './study/study.controller';
import { StudyService } from './study/study.service';
import {UrlLogMiddleware} from './middleware/url-log.middleware';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, StudyController],
  providers: [AppService, ArticleService, StudyService],
})
export class AppModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(UrlLogMiddleware).forRoutes("*")
  }
} 
