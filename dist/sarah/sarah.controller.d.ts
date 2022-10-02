/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProjectDto } from 'src/projects/dto/project.dto';
import { UpdateProjectDto } from 'src/projects/dto/update-project.dto';
import { SarahService } from './sarah.service';
export declare class SarahController {
    private readonly sarahService;
    constructor(sarahService: SarahService);
    returnAllSarahs(): Promise<(import("./entities/sarah.entities").Sarah & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    returnOneSarah(id: string): Promise<import("./entities/sarah.entities").Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSarah(newSarah: ProjectDto): Promise<import("./entities/sarah.entities").Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateSarah(id: string, updatedSarah: UpdateProjectDto): Promise<import("./entities/sarah.entities").Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteOneSarah(id: string): Promise<import("./entities/sarah.entities").Sarah & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearSarahDatabase(): Promise<import("mongodb").DeleteResult>;
}
