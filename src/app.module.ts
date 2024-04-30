import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionaireController } from './questionaire/questionaire.controller';
import { QuestionaireService } from './questionaire/questionaire.service';

@Module({
  imports: [],
  controllers: [AppController, QuestionaireController],
  providers: [AppService, QuestionaireService],
})
export class AppModule {}
