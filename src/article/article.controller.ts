import { Controller, Get ,Render, Request, Response} from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    @Render("index")
    list(@Request() request,@Response() response){
        return {
            name:'lane',
            age:'27'
        }
    } 
}
