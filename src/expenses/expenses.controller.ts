import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
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
    return this.expensesService.returnAllExpensesAscending();
  }

  @Public()
  @Get(':id')
  findOneExpense(@Param('id') id: string) {
    return this.expensesService.findOneExpense(id);
  }

  @Post()
  createExpense(@Body() expense: ExpenseDto) {
    return this.expensesService.createExpense(expense);
  }

  @Patch(':id')
  updateExpense(
    @Param('id') id: string,
    @Body() updatedExpense: UpdateExpenseDto,
  ) {
    return this.expensesService.updateExpense(id, updatedExpense);
  }

  @Delete()
  clearDatabase() {
    return this.expensesService.clearExpenseDatabase();
  }

  @Delete(':id')
  removeExpense(@Param('id') id: string) {
    return this.expensesService.removeExpense(id);
  }
}
