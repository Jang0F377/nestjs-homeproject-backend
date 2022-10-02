import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_SARAH_KEY } from '../decorators/sarah.decorator';
import { CustomForbiddenFilter } from '../filters/custom-exception.filter';

@Injectable()
export class SarahGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isSarah = this.reflector.get(IS_SARAH_KEY, context.getHandler());
    if (!isSarah) {
      return true;
    } else {
      const headers = context
        .switchToHttp()
        .getRequest<Request>()
        .header('Authorization');

      return headers === 'sarah';
    }
  }
}
