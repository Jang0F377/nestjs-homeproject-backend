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
