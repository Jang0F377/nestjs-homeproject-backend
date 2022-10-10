import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entities';
import { Model } from 'mongoose';
import { NoSpaceFilter } from 'src/common/filters/no-space.filter';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findUser(username: string) {
    const user = await this.userModel
      .findOne({
        username: username,
      })
      .exec();
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async createUser(user: UserDto) {
    const getTotal = await this.userModel.count();
    if (getTotal >= 2) throw new NoSpaceFilter();
    const saltRounds = 10;
    const hash = await bcrypt.hash(user.password, saltRounds);
    const saveUser = new this.userModel({
      username: user.username,
      password: hash,
    });
    return saveUser.save();
  }

  async validatePassword(user: UserDto) {
    const userExists = await this.findUser(user.username);
    const isMatch = await bcrypt.compare(user.password, userExists.password);
    return isMatch;
  }

  async resetUsers() {
    return await this.userModel.deleteMany();
  }
}
