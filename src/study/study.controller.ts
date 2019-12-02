import { Controller, Get } from '@nestjs/common';

@Controller('study')
export class StudyController {

    @Get()
    index(){
        console.log('study')
        return '123'
    }
}
