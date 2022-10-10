import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { NoSpaceFilter } from 'src/common/filters/no-space.filter';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('login')
export class LoginController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Post()
  @HttpCode(200)
  validateCredentials(@Body() credentials: UserDto) {
    return this.userService.validatePassword(credentials);
  }
}

@Controller('register')
export class RegisterController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Post()
  @HttpCode(200)
  @UseFilters(NoSpaceFilter)
  registerUser(@Body() credentials: UserDto) {
    return this.userService.createUser(credentials);
  }

  @Delete()
  resetUsers() {
    return this.userService.resetUsers();
  }
}
