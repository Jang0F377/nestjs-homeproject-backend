"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomForbiddenFilter = void 0;
const common_1 = require("@nestjs/common");
let CustomForbiddenFilter = class CustomForbiddenFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse();
        const error = typeof response === 'string'
            ? { message: exceptionResponse }
            : exceptionResponse;
        response.status(status).json(Object.assign(Object.assign({}, error), { timestamp: new Date().toISOString(), warning: 'This will be reported', headers: ctx.getRequest().headers }));
    }
};
CustomForbiddenFilter = __decorate([
    (0, common_1.Catch)(common_1.ForbiddenException, common_1.UnauthorizedException)
], CustomForbiddenFilter);
exports.CustomForbiddenFilter = CustomForbiddenFilter;
//# sourceMappingURL=custom-exception.filter.js.map