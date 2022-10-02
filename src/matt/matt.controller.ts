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
import { ProjectDto } from 'src/projects/dto/project.dto';
import { UpdateProjectDto } from 'src/projects/dto/update-project.dto';
import { MattService } from './matt.service';

@Controller('matt')
export class MattController {
  constructor(private readonly mattService: MattService) {}

  @Public()
  @Get()
  returnAllMatts() {
    return this.mattService.returnAllMatt();
  }

  @Public()
  @Get(':id')
  returnOneMatt(@Param('id') id: string) {
    return this.mattService.findOneMatt(id);
  }

  @Public()
  @Post()
  createMatt(@Body() newMatt: ProjectDto) {
    return this.mattService.createMatt(newMatt);
  }

  @Public()
  @Patch(':id')
  updateMatt(@Param('id') id: string, @Body() updatedMatt: UpdateProjectDto) {
    return this.mattService.updateMatt(id, updatedMatt);
  }

  @Public()
  @Delete(':id')
  deleteOneMatt(@Param('id') id: string) {
    return this.mattService.removeMatt(id);
  }

  @Public()
  @Delete()
  clearMattDatabase() {
    return this.mattService.clearMattDatabase();
  }
}
