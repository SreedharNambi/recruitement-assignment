import { IsEnum, IsIn, IsString } from "class-validator";



export enum ProjectType{
    JEE = "JEE",
    NEET = "NEET",
    CET = "CET"
}

export class AddQuestionDto{

    @IsString()
    projectName:string;

    @IsEnum(ProjectType)
    type: ProjectType;

    @IsString()
    country:string;

}

