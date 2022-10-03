import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { ProjectsModule } from './projects/projects.module';
import { CommonModule } from './common/common.module';
import { SarahModule } from './sarah/sarah.module';
import { MattModule } from './matt/matt.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    ExpensesModule,
    ProjectsModule,
    MongooseModule.forRoot('mongodb://root:pass1234@server-mongodb:27017'),
    CommonModule,
    SarahModule,
    MattModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
