"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const fs = require("fs");
async function bootstrap() {
    const base = process.env.PWD;
    const httpsOptions = {
        key: fs.readFileSync(base + '/secrets/private-key.pem', 'utf8'),
        cert: fs.readFileSync(base + '/secrets/public-certificate.pem', 'utf8'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.enableCors({
        origin: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    await app.listen(80);
}
bootstrap();
//# sourceMappingURL=main.js.map