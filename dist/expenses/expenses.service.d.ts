import { Model } from 'mongoose';
import { ExpenseDto } from './dto/expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
export declare class ExpensesService {
    private readonly expenseModel;
    constructor(expenseModel: Model<Expense>);
    returnAllExpensesAscending(): Promise<(Expense & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneExpense(id: string): Promise<Expense & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createExpense(newExpense: ExpenseDto): Promise<Expense & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateExpense(id: string, updatedExpense: UpdateExpenseDto): Promise<{
        Updated: {
            _id: any;
        };
    }>;
    clearExpenseDatabase(): Promise<import("mongodb").DeleteResult>;
    removeExpense(id: string): Promise<import("mongodb").DeleteResult>;
}
