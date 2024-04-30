import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QuestionaireService } from './questionaire.service';
import { AddQuestionDto } from './dto/add-question.dto';

@Controller('questionaire')
export class QuestionaireController {
    constructor(private readonly questionaireService: QuestionaireService){}

    //Create a new Questionaire


    @Post()
    createProject(@Body() data:any){

    }

    @Get()
    getQuestions(@Query('projectId') projectId:string){

    }

    @Post('add')
    addQuestion(@Body() data:AddQuestionDto){
        
    }
}
