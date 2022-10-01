import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ExpensesModule,
    ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/teaster-wednester'),
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
