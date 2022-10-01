import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { ExpenseDto } from './dto/expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Public()
  @Get()
  returnAllExpenses() {
    return this.expensesService.returnAllExpenses();
  }

  @Get(':id')
  async findOneExpense(@Param('id') id: string) {
    return this.expensesService.findOneExpense(id);
  }

  @Post()
  async createExpense(@Body() expense: ExpenseDto) {
    return this.expensesService.createExpense(expense);
  }

  @Patch(':id')
  async updateExpense(
    @Param('id') id: string,
    @Body() updatedExpense: UpdateExpenseDto,
  ) {
    const existingExpense = await this.expensesService.updateExpense(
      id,
      updatedExpense,
    );
  }

  @Delete()
  clearDatabase() {
    return this.expensesService.clearDatabase();
  }
}
