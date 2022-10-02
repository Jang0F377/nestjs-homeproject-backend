import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class CustomForbiddenFilter<T extends HttpException> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
