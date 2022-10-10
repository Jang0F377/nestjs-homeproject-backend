import { IsString, MaxLength, MinLength } from 'class-validator';

export class UserDto {
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
}
