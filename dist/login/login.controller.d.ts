import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
export declare class LoginController {
    private readonly userService;
    constructor(userService: UsersService);
    validateCredentials(credentials: UserDto): Promise<boolean>;
}
export declare class RegisterController {
    private readonly userService;
    constructor(userService: UsersService);
    registerUser(credentials: UserDto): Promise<import("../users/entities/user.entities").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    resetUsers(): Promise<import("mongodb").DeleteResult>;
}
