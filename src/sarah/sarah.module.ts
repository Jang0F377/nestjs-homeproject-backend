import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { SarahGuard } from 'src/common/guards/sarah.guard';
import { Sarah, SarahSchema } from './entities/sarah.entities';
import { SarahController } from './sarah.controller';
import { SarahService } from './sarah.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sarah.name, schema: SarahSchema }]),
  ],
  controllers: [SarahController],
  providers: [SarahService, { provide: APP_GUARD, useClass: SarahGuard }],
})
export class SarahModule {}
