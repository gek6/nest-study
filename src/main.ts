import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import * as cookieParser from "cookie-parser";
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态服务目录
  // app.useStaticAssets("public")

  // 配置虚拟目录
  app.useStaticAssets("public",{
    prefix:"/static/"
  })

  // 设置模板目录
  app.setBaseViewsDir("views");
  app.setViewEngine("ejs");
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
