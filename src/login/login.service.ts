import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Login.name) private readonly loginModel: Model<Login>,
  ) {}

  validateCredentials(credentials: LoginDto) {
    const isUsername = (): boolean => {
      if (
        credentials.username === 'mjg7092' ||
        credentials.username === 'smg2729'
      ) {
        return true;
      }
      return false;
    };
    const isPassword = (): boolean => {
      if (credentials.password === 'password') {
        return true;
      }

      return false;
    };
    const isSecret = (): boolean => {
      if (credentials.secretPhase === 'teaster-wednester') {
        return true;
      }

      return false;
    };

    if (isUsername() && isPassword() && isSecret()) {
      return true;
    }
    throw new ForbiddenException();
  }
}
