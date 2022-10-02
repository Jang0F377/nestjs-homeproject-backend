"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MattModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const matt_entities_1 = require("./entities/matt.entities");
const matt_controller_1 = require("./matt.controller");
const matt_service_1 = require("./matt.service");
let MattModule = class MattModule {
};
MattModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: matt_entities_1.Matt.name, schema: matt_entities_1.MattSchema }]),
        ],
        controllers: [matt_controller_1.MattController],
        providers: [matt_service_1.MattService],
    })
], MattModule);
exports.MattModule = MattModule;
//# sourceMappingURL=matt.module.js.map