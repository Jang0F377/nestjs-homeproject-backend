import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entities';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findUser(username: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createUser(user: UserDto): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    validatePassword(user: UserDto): Promise<boolean>;
    resetUsers(): Promise<import("mongodb").DeleteResult>;
}
