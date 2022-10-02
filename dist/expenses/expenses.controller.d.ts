/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ExpenseDto } from './dto/expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesService } from './expenses.service';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    returnAllExpenses(): Promise<(import("./entities/expense.entity").Expense & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneExpense(id: string): Promise<import("./entities/expense.entity").Expense & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createExpense(expense: ExpenseDto): Promise<import("./entities/expense.entity").Expense & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateExpense(id: string, updatedExpense: UpdateExpenseDto): Promise<import("./entities/expense.entity").Expense & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearDatabase(): Promise<import("mongodb").DeleteResult>;
    removeExpense(id: string): Promise<import("mongodb").DeleteResult>;
}
