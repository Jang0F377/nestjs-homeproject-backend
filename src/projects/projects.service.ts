import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/projects.entities';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async returnAllProjects() {
    return await this.projectModel.find().exec();
  }

  async findOneProject(id: string) {
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException();
    }
    return project;
  }

  createProject(newProject: ProjectDto) {
    const project = new this.projectModel(newProject);
    return project.save();
  }

  async updateProject(id: string, updatedProject: UpdateProjectDto) {
    const existingProject = await this.projectModel
      .findOneAndUpdate({ _id: id }, { $set: updatedProject }, { new: true })
      .exec();

    return existingProject;
  }

  async removeProject(id: string) {
    const toRemove = await this.projectModel.findByIdAndDelete(id);
    return toRemove;
  }

  async clearProjectDatabase() {
    return await this.projectModel.deleteMany();
  }
}
