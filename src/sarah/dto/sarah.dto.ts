import { IsInt, IsString, Max, Min } from 'class-validator';

export class SarahDto {
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
}
