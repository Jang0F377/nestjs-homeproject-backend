import {
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class MattDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(0, {
    message: 'Priority must be a number > 0',
  })
  @Max(100, {
    message: 'Priority must be a number <=  100',
  })
  readonly priority: number;

  @IsOptional()
  @IsObject()
  readonly details: {
    cost: number;
    savedTowardCost: number;
  };
}
