import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Expense extends Document {
  @Prop()
  name: string;
  @Prop()
  cost: number;
  @Prop()
  dayCharged: number;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
