import { Model } from 'mongoose';
import { SarahDto } from './dto/sarah.dto';
import { UpdateSarahDto } from './dto/update-sarah.dto';
import { Sarah } from './entities/sarah.entities';
export declare class SarahService {
    private readonly sarahModel;
    constructor(sarahModel: Model<Sarah>);
    returnAllSarah(): Promise<(Sarah & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneSarah(id: string): Promise<Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSarah(newSarah: SarahDto): Promise<Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateSarah(id: string, updatedSarah: UpdateSarahDto): Promise<Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeSarah(id: string): Promise<Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearSarahDatabase(): Promise<import("mongodb").DeleteResult>;
}
