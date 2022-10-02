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
import { MattService } from './matt.service';
export declare class MattController {
    private readonly mattService;
    constructor(mattService: MattService);
    returnAllMatts(): Promise<(import("./entities/matt.entities").Matt & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    returnOneMatt(id: string): Promise<import("./entities/matt.entities").Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createMatt(newMatt: ProjectDto): Promise<import("./entities/matt.entities").Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateMatt(id: string, updatedMatt: UpdateProjectDto): Promise<import("./entities/matt.entities").Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteOneMatt(id: string): Promise<import("./entities/matt.entities").Matt & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearMattDatabase(): Promise<import("mongodb").DeleteResult>;
}
