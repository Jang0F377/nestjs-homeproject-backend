"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExpenseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const expense_dto_1 = require("./expense.dto");
class UpdateExpenseDto extends (0, mapped_types_1.PartialType)(expense_dto_1.ExpenseDto) {
}
exports.UpdateExpenseDto = UpdateExpenseDto;
//# sourceMappingURL=update-expense.dto.js.map