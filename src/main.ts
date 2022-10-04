import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { CustomBlanketExceptionFilter } from './common/filters/custom-blanket-exception.filter';
import { CustomForbiddenFilter } from './common/filters/custom-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(
    new CustomForbiddenFilter(),
    new CustomBlanketExceptionFilter(),
  );
  await app.listen(3000);
}
bootstrap();
