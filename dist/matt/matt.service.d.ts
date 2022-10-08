import { Model } from 'mongoose';
import { MattDto } from './dto/matt.dto';
import { UpdateMattDto } from './dto/update-matt.dto';
import { Matt } from './entities/matt.entities';
export declare class MattService {
    private readonly mattModel;
    constructor(mattModel: Model<Matt>);
    returnAllMatt(): Promise<(Matt & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneMatt(id: string): Promise<Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMatt(newMatt: MattDto): Promise<Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMatt(id: string, updatedMatt: UpdateMattDto): Promise<Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeMatt(id: string): Promise<Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearMattDatabase(): Promise<import("mongodb").DeleteResult>;
}
