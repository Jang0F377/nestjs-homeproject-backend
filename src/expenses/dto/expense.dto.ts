import { IsNumber, IsString, Max, MaxLength, Min } from 'class-validator';

export class ExpenseDto {
  @IsString()
  @MaxLength(30, {
    message: 'Name must be less than 30 chars',
  })
  readonly name: string;

  @IsNumber()
  readonly cost: number;

  @IsNumber()
  @Min(1, {
    message: 'Date must be a number greater than 0',
  })
  @Max(31, {
    message: 'Date must be a number less than 31',
  })
  readonly dayCharged: number;
}
