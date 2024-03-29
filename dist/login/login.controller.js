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
exports.RegisterController = exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../common/decorators/public.decorator");
const no_space_filter_1 = require("../common/filters/no-space.filter");
const user_dto_1 = require("../users/dto/user.dto");
const users_service_1 = require("../users/users.service");
let LoginController = class LoginController {
    constructor(userService) {
        this.userService = userService;
    }
    validateCredentials(credentials) {
        return this.userService.validatePassword(credentials);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "validateCredentials", null);
LoginController = __decorate([
    (0, common_1.Controller)('login'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], LoginController);
exports.LoginController = LoginController;
let RegisterController = class RegisterController {
    constructor(userService) {
        this.userService = userService;
    }
    registerUser(credentials) {
        return this.userService.createUser(credentials);
    }
    resetUsers() {
        return this.userService.resetUsers();
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseFilters)(no_space_filter_1.NoSpaceFilter),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "resetUsers", null);
RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=login.controller.js.map