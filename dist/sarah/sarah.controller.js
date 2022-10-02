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
exports.SarahController = void 0;
const common_1 = require("@nestjs/common");
const project_dto_1 = require("../projects/dto/project.dto");
const update_project_dto_1 = require("../projects/dto/update-project.dto");
const sarah_service_1 = require("./sarah.service");
let SarahController = class SarahController {
    constructor(sarahService) {
        this.sarahService = sarahService;
    }
    returnAllSarahs() {
        return this.sarahService.returnAllSarah();
    }
    returnOneSarah(id) {
        return this.sarahService.findOneSarah(id);
    }
    createSarah(newSarah) {
        return this.sarahService.createSarah(newSarah);
    }
    updateSarah(id, updatedSarah) {
        return this.sarahService.updateSarah(id, updatedSarah);
    }
    deleteOneSarah(id) {
        return this.sarahService.removeSarah(id);
    }
    clearSarahDatabase() {
        return this.sarahService.clearSarahDatabase();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SarahController.prototype, "returnAllSarahs", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SarahController.prototype, "returnOneSarah", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.ProjectDto]),
    __metadata("design:returntype", void 0)
], SarahController.prototype, "createSarah", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], SarahController.prototype, "updateSarah", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SarahController.prototype, "deleteOneSarah", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SarahController.prototype, "clearSarahDatabase", null);
SarahController = __decorate([
    (0, common_1.Controller)('sarah'),
    __metadata("design:paramtypes", [sarah_service_1.SarahService])
], SarahController);
exports.SarahController = SarahController;
//# sourceMappingURL=sarah.controller.js.map