import { ProjectDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    returnAllProjects(): Promise<(import("./entities/projects.entities").Project & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneProject(id: string): Promise<import("./entities/projects.entities").Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createProject(newProject: ProjectDto): Promise<import("./entities/projects.entities").Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProject(id: string, updatedProject: UpdateProjectDto): Promise<import("./entities/projects.entities").Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    clearProjectDatabase(): Promise<import("mongodb").DeleteResult>;
    removeProject(id: string): Promise<import("./entities/projects.entities").Project & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
