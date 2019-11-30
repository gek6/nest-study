import { Controller, Get ,Render} from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    @Render("index")
    list(){
        return {
            name:'lane',
            age:'27'
        }
    }
}
