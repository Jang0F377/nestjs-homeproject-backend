import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { CustomBlanketExceptionFilter } from './common/filters/custom-blanket-exception.filter';
import { CustomForbiddenFilter } from './common/filters/custom-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('secrets/private-key.pem', 'utf8'),
    cert: fs.readFileSync('secrets/public-certificate.pem', 'utf8'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
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
  await app.listen(80);
}
bootstrap();
