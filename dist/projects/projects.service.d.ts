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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ProjectDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/projects.entities';
export declare class ProjectsService {
    private readonly projectModel;
    constructor(projectModel: Model<Project>);
    returnAllProjects(): Promise<(Project & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneProject(id: string): Promise<Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createProject(newProject: ProjectDto): Promise<Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProject(id: string, updatedProject: UpdateProjectDto): Promise<Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeProject(id: string): Promise<Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearProjectDatabase(): Promise<import("mongodb").DeleteResult>;
}
