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
exports.SarahService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sarah_entities_1 = require("./entities/sarah.entities");
let SarahService = class SarahService {
    constructor(sarahModel) {
        this.sarahModel = sarahModel;
    }
    async returnAllSarah() {
        return await this.sarahModel.find().sort({ priority: 1 }).exec();
    }
    async findOneSarah(id) {
        const sarah = await this.sarahModel.findById(id).exec();
        if (!sarah) {
            throw new common_1.NotFoundException();
        }
        return sarah;
    }
    async createSarah(newSarah) {
        const sarah = new this.sarahModel(newSarah);
        return sarah.save();
    }
    async updateSarah(id, updatedSarah) {
        const existingSarah = await this.sarahModel
            .findOneAndUpdate({ _id: id }, { $set: updatedSarah }, { new: true })
            .exec();
        return existingSarah;
    }
    async removeSarah(id) {
        const toRemove = await this.sarahModel.findByIdAndDelete(id);
        return toRemove;
    }
    async clearSarahDatabase() {
        return await this.sarahModel.deleteMany();
    }
};
SarahService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sarah_entities_1.Sarah.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SarahService);
exports.SarahService = SarahService;
//# sourceMappingURL=sarah.service.js.map