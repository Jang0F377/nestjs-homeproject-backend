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
