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
    updateExpense(id: string, updatedExpense: UpdateExpenseDto): Promise<{
        Updated: {
            _id: any;
        };
    }>;
    clearDatabase(): Promise<import("mongodb").DeleteResult>;
    removeExpense(id: string): Promise<import("mongodb").DeleteResult>;
}
