import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sarah, SarahSchema } from './entities/sarah.entities';
import { SarahController } from './sarah.controller';
import { SarahService } from './sarah.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sarah.name, schema: SarahSchema }]),
  ],
  controllers: [SarahController],
  providers: [SarahService],
})
export class SarahModule {}
