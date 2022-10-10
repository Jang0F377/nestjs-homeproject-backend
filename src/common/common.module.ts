import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { CustomBlanketExceptionFilter } from './filters/custom-blanket-exception.filter';
import { CustomForbiddenFilter } from './filters/custom-exception.filter';
import { NoSpaceFilter } from './filters/no-space.filter';
import { AuthGuard } from './guards/auth-guard.guard';

@Module({
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_FILTER, useClass: CustomForbiddenFilter },
    { provide: APP_FILTER, useClass: CustomBlanketExceptionFilter },
  ],
})
export class CommonModule {}
