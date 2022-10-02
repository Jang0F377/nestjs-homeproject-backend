import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Public()
  @Post()
  @HttpCode(200)
  validateCredentials(@Body() credentials: LoginDto) {
    return this.loginService.validateCredentials(credentials);
  }
}
