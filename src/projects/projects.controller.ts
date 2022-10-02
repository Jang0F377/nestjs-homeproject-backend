import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { ProjectDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Public()
  @Get()
  returnAllProjects() {
    return this.projectsService.returnAllProjects();
  }

  @Public()
  @Get(':id')
  findOneProject(@Param('id') id: string) {
    return this.projectsService.findOneProject(id);
  }

  @Post()
  createProject(@Body() newProject: ProjectDto) {
    return this.projectsService.createProject(newProject);
  }

  @Patch(':id')
  updateProject(
    @Param('id') id: string,
    @Body() updatedProject: UpdateProjectDto,
  ) {
    return this.projectsService.updateProject(id, updatedProject);
  }

  @Delete()
  clearProjectDatabase() {
    return this.projectsService.clearProjectDatabase();
  }

  @Delete(':id')
  removeProject(@Param('id') id: string) {
    return this.projectsService.removeProject(id);
  }
}
