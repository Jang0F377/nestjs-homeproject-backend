import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { Login } from './entities/login.entity';
export declare class LoginService {
    private readonly loginModel;
    constructor(loginModel: Model<Login>);
    validateCredentials(credentials: LoginDto): boolean;
}
