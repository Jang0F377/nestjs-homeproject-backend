import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MattDto } from './dto/matt.dto';
import { UpdateMattDto } from './dto/update-matt.dto';
import { Matt } from './entities/matt.entities';

@Injectable()
export class MattService {
  constructor(
    @InjectModel(Matt.name) private readonly mattModel: Model<Matt>,
  ) {}

  async returnAllMatt() {
    return await this.mattModel.find().exec();
  }

  async findOneMatt(id: string) {
    const matt = await this.mattModel.findById(id).exec();
    if (!matt) {
      throw new NotFoundException();
    }
    return matt;
  }

  async createMatt(newMatt: MattDto) {
    const matt = new this.mattModel(newMatt);
    return matt.save();
  }

  async updateMatt(id: string, updatedMatt: UpdateMattDto) {
    const existingMatt = await this.mattModel
      .findOneAndUpdate({ _id: id }, { $set: updatedMatt }, { new: true })
      .exec();

    return existingMatt;
  }

  async removeMatt(id: string) {
    const toRemove = await this.mattModel.findByIdAndDelete(id);
    return toRemove;
  }

  async clearMattDatabase() {
    return await this.mattModel.deleteMany();
  }
}
