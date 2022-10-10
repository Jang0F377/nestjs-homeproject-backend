"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSpaceFilter = void 0;
const common_1 = require("@nestjs/common");
let NoSpaceFilter = class NoSpaceFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        response.status(401).json({
            timestamp: new Date().toISOString(),
            message: 'No More Users are allowed',
            warning: 'This will be reported',
            yourIp: host.switchToHttp().getRequest().ip,
        });
    }
};
NoSpaceFilter = __decorate([
    (0, common_1.Catch)()
], NoSpaceFilter);
exports.NoSpaceFilter = NoSpaceFilter;
//# sourceMappingURL=no-space.filter.js.map