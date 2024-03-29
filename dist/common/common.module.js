"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const custom_blanket_exception_filter_1 = require("./filters/custom-blanket-exception.filter");
const custom_exception_filter_1 = require("./filters/custom-exception.filter");
const auth_guard_guard_1 = require("./guards/auth-guard.guard");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Module)({
        providers: [
            { provide: core_1.APP_GUARD, useClass: auth_guard_guard_1.AuthGuard },
            { provide: core_1.APP_FILTER, useClass: custom_exception_filter_1.CustomForbiddenFilter },
            { provide: core_1.APP_FILTER, useClass: custom_blanket_exception_filter_1.CustomBlanketExceptionFilter },
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map