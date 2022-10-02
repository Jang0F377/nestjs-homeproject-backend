import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Matt, MattSchema } from './entities/matt.entities';
import { MattController } from './matt.controller';
import { MattService } from './matt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Matt.name, schema: MattSchema }]),
  ],
  controllers: [MattController],
  providers: [MattService],
})
export class MattModule {}
