import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Project,
  ProjectSchema,
} from 'src/projects/entities/projects.entities';
import { MattController } from './matt.controller';
import { MattService } from './matt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [MattController],
  providers: [MattService],
})
export class MattModule {}
