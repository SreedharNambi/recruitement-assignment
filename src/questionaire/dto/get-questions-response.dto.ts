import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";


export class GetQuestionsResponseDto{

    @IsString()
    projectId:string;

    @IsString()
    projectName:string;

    @IsString()
    type: string;

    @IsArray()
    @ValidateNested()
    @Type(()=> QuestionDto)
    data:QuestionDto[] =[];
}

export class QuestionDto{

    @IsString()
    questionId:string;

    @IsString()
    question: string;
}