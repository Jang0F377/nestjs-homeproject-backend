"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const expenses_module_1 = require("./expenses/expenses.module");
const projects_module_1 = require("./projects/projects.module");
const common_module_1 = require("./common/common.module");
const sarah_module_1 = require("./sarah/sarah.module");
const matt_module_1 = require("./matt/matt.module");
const login_module_1 = require("./login/login.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            expenses_module_1.ExpensesModule,
            projects_module_1.ProjectsModule,
            mongoose_1.MongooseModule.forRoot('mongodb://root:pass1234@server-mongodb:27017'),
            common_module_1.CommonModule,
            sarah_module_1.SarahModule,
            matt_module_1.MattModule,
            login_module_1.LoginModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map