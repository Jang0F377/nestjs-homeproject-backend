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
exports.ExpensesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const expense_entity_1 = require("./entities/expense.entity");
let ExpensesService = class ExpensesService {
    constructor(expenseModel) {
        this.expenseModel = expenseModel;
    }
    async returnAllExpensesAscending() {
        return await this.expenseModel.find().sort({ dayCharged: 1 }).exec();
    }
    async findOneExpense(id) {
        const expense = await this.expenseModel.findOne({ _id: id }).exec();
        if (!expense) {
            throw new common_1.NotFoundException();
        }
        return expense;
    }
    async createExpense(newExpense) {
        const expense = new this.expenseModel(newExpense);
        return expense.save();
    }
    async updateExpense(id, updatedExpense) {
        const existingExpense = await this.expenseModel
            .findOneAndUpdate({ _id: id }, { $set: updatedExpense }, { new: true })
            .exec();
        return { Updated: { _id: existingExpense._id } };
    }
    async clearExpenseDatabase() {
        return await this.expenseModel.deleteMany();
    }
    async removeExpense(id) {
        const toRemove = await this.expenseModel.deleteOne({ _id: id });
        return toRemove;
    }
};
ExpensesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(expense_entity_1.Expense.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ExpensesService);
exports.ExpensesService = ExpensesService;
//# sourceMappingURL=expenses.service.js.map