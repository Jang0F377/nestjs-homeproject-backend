import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class NoSpaceFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    response.status(401).json({
      timestamp: new Date().toISOString(),
      message: 'No More Users are allowed',
      warning: 'This will be reported',
      yourIp: host.switchToHttp().getRequest<Request>().ip,
    });
  }
}
