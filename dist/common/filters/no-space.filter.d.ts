import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class NoSpaceFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
