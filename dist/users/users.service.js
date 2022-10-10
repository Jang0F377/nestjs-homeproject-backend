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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const user_entities_1 = require("./entities/user.entities");
const mongoose_2 = require("mongoose");
const no_space_filter_1 = require("../common/filters/no-space.filter");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findUser(username) {
        const user = await this.userModel
            .findOne({
            username: username,
        })
            .exec();
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async createUser(user) {
        const getTotal = await this.userModel.count();
        if (getTotal >= 2)
            throw new no_space_filter_1.NoSpaceFilter();
        const saltRounds = 10;
        const hash = await bcrypt.hash(user.password, saltRounds);
        const saveUser = new this.userModel({
            username: user.username,
            password: hash,
        });
        return saveUser.save();
    }
    async validatePassword(user) {
        const userExists = await this.findUser(user.username);
        const isMatch = await bcrypt.compare(user.password, userExists.password);
        return isMatch;
    }
    async resetUsers() {
        return await this.userModel.deleteMany();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entities_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map