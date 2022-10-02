"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SarahModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sarah_entities_1 = require("./entities/sarah.entities");
const sarah_controller_1 = require("./sarah.controller");
const sarah_service_1 = require("./sarah.service");
let SarahModule = class SarahModule {
};
SarahModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: sarah_entities_1.Sarah.name, schema: sarah_entities_1.SarahSchema }]),
        ],
        controllers: [sarah_controller_1.SarahController],
        providers: [sarah_service_1.SarahService],
    })
], SarahModule);
exports.SarahModule = SarahModule;
//# sourceMappingURL=sarah.module.js.map