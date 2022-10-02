import {
  IsAlphanumeric,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(3, {
    message: 'Validation Unsuccessful Please try again',
  })
  @MaxLength(25, {
    message: 'Validation Unsuccessful Please try again',
  })
  readonly username: string;

  @IsString()
  @MinLength(3, {
    message: 'Validation Unsuccessful Please try again',
  })
  @MaxLength(25, {
    message: 'Validation Unsuccessful Please try again',
  })
  readonly password: string;

  @MinLength(2, {
    message: 'Validation Unsuccessful Please try again',
  })
  @MaxLength(20, {
    message: 'Validation Unsuccessful Please try again',
  })
  readonly secretPhase: string;
}
