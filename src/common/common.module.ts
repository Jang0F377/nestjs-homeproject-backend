import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth-guard.guard';
import { SarahGuard } from './guards/sarah.guard';

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class CommonModule {}
