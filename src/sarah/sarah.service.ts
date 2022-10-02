import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SarahDto } from './dto/sarah.dto';
import { UpdateSarahDto } from './dto/update-sarah.dto';
import { Sarah } from './entities/sarah.entities';

@Injectable()
export class SarahService {
  constructor(
    @InjectModel(Sarah.name) private readonly sarahModel: Model<Sarah>,
  ) {}

  async returnAllSarah() {
    return await this.sarahModel.find().exec();
  }

  async findOneSarah(id: string) {
    const sarah = await this.sarahModel.findById(id).exec();
    if (!sarah) {
      throw new NotFoundException();
    }
    return sarah;
  }

  async createSarah(newSarah: SarahDto) {
    const sarah = new this.sarahModel(newSarah);
    return sarah.save();
  }

  async updateSarah(id: string, updatedSarah: UpdateSarahDto) {
    const existingSarah = await this.sarahModel
      .findOneAndUpdate({ _id: id }, { $set: updatedSarah }, { new: true })
      .exec();

    return existingSarah;
  }

  async removeSarah(id: string) {
    const toRemove = await this.sarahModel.findByIdAndDelete(id);
    return toRemove;
  }

  async clearSarahDatabase() {
    return await this.sarahModel.deleteMany();
  }
}
