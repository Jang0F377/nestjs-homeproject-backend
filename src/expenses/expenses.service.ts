import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpenseDto } from './dto/expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(Expense.name) private readonly expenseModel: Model<Expense>,
  ) {}

  async returnAllExpensesAscending() {
    return await this.expenseModel.find().sort({ dayCharged: 1 }).exec();
  }

  async findOneExpense(id: string) {
    const expense = await this.expenseModel.findOne({ _id: id }).exec();
    if (!expense) {
      throw new NotFoundException();
    }
    return expense;
  }

  async createExpense(newExpense: ExpenseDto) {
    const expense = new this.expenseModel(newExpense);
    return expense.save();
  }

  async updateExpense(id: string, updatedExpense: UpdateExpenseDto) {
    const existingExpense = await this.expenseModel
      .findOneAndUpdate({ _id: id }, { $set: updatedExpense }, { new: true })
      .exec();

    return { Updated: { _id: existingExpense._id } };
  }

  async clearExpenseDatabase() {
    return await this.expenseModel.deleteMany();
  }

  async removeExpense(id: string) {
    const toRemove = await this.expenseModel.deleteOne({ _id: id });
    return toRemove;
  }
}
