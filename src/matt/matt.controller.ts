import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { AuthGuard } from 'src/common/guards/auth-guard.guard';
import { ProjectDto } from 'src/projects/dto/project.dto';
import { UpdateProjectDto } from 'src/projects/dto/update-project.dto';
import { MattService } from './matt.service';

@Controller('matt')
export class MattController {
  constructor(private readonly mattService: MattService) {}

  @Get()
  returnAllMatts() {
    return this.mattService.returnAllMatt();
  }

  @Get(':id')
  returnOneMatt(@Param('id') id: string) {
    return this.mattService.findOneMatt(id);
  }

  @Post()
  createMatt(@Body() newMatt: ProjectDto) {
    return this.mattService.createMatt(newMatt);
  }

  @Patch(':id')
  updateMatt(@Param('id') id: string, @Body() updatedMatt: UpdateProjectDto) {
    return this.mattService.updateMatt(id, updatedMatt);
  }

  @Delete(':id')
  deleteOneMatt(@Param('id') id: string) {
    return this.mattService.removeMatt(id);
  }

  @Delete()
  clearMattDatabase() {
    return this.mattService.clearMattDatabase();
  }
}
