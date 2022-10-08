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
