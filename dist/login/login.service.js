"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const login_entity_1 = require("./entities/login.entity");
let LoginService = class LoginService {
    constructor(loginModel) {
        this.loginModel = loginModel;
    }
    validateCredentials(credentials) {
        const isUsername = () => {
            if (credentials.username === 'mjg7092' ||
                credentials.username === 'smg2729') {
                return true;
            }
            return false;
        };
        const isPassword = () => {
            if (credentials.password === 'password') {
                return true;
            }
            return false;
        };
        const isSecret = () => {
            if (credentials.secretPhase === 'teaster-wednester') {
                return true;
            }
            return false;
        };
        if (isUsername() && isPassword() && isSecret()) {
            return true;
        }
        throw new common_1.ForbiddenException();
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(login_entity_1.Login.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map