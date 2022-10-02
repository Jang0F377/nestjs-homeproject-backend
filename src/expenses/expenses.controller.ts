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

  @Get()
  returnAllExpenses() {
    return this.expensesService.returnAllExpenses();
  }

  @Public()
  @Get(':id')
  findOneExpense(@Param('id') id: string) {
    return this.expensesService.findOneExpense(id);
  }

  @Public()
  @Post()
  createExpense(@Body() expense: ExpenseDto) {
    return this.expensesService.createExpense(expense);
  }

  @Public()
  @Patch(':id')
  updateExpense(
    @Param('id') id: string,
    @Body() updatedExpense: UpdateExpenseDto,
  ) {
    return this.expensesService.updateExpense(id, updatedExpense);
  }

  @Public()
  @Delete()
  clearDatabase() {
    return this.expensesService.clearExpenseDatabase();
  }

  @Public()
  @Delete(':id')
  removeExpense(@Param('id') id: string) {
    return this.expensesService.removeExpense(id);
  }
}
