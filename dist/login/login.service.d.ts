import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
export declare class LoginService {
    private readonly userService;
    constructor(userService: UsersService);
    validateUser(credentials: UserDto): Promise<boolean>;
}
