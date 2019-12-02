import { Controller, Get ,Render, Request, Response} from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    @Render("index")
    list(@Request() request,@Response() response){
        console.log(request.url)
        // 设置cookie
        response.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true});
        return {
            name:'lane',
            age:'27'
        }
    }
    @Get(':id')
    detail(@Request() request){
        // 获取客户端cookie
        let cookie =  request.cookies
        console.log(cookie)

    }

    
}
