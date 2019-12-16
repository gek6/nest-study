import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UrlLogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
 
    console.log(req)
    console.log({
      url:req.url,
      method:req.method,
      time:new Date()
    })
    next();
  }
}
