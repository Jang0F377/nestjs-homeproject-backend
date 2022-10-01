import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Project,
  ProjectSchema,
} from 'src/projects/entities/projects.entities';
import { SarahController } from './sarah.controller';
import { SarahService } from './sarah.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [SarahController],
  providers: [SarahService],
})
export class SarahModule {}
