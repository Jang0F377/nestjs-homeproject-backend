import { IsNumber, IsString } from 'class-validator';

export class ExpenseDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly cost: number;

  @IsNumber()
  readonly dayCharged: number;
}
