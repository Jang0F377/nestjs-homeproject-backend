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
import { Sarah } from 'src/common/decorators/sarah.decorator';
import { ProjectDto } from 'src/projects/dto/project.dto';
import { UpdateProjectDto } from 'src/projects/dto/update-project.dto';
import { SarahService } from './sarah.service';

@Controller('sarah')
export class SarahController {
  constructor(private readonly sarahService: SarahService) {}

  @Public()
  @Get()
  returnAllSarahs() {
    return this.sarahService.returnAllSarah();
  }

  @Public()
  @Get(':id')
  returnOneSarah(@Param('id') id: string) {
    return this.sarahService.findOneSarah(id);
  }

  @Public()
  @Post()
  createSarah(@Body() newSarah: ProjectDto) {
    return this.sarahService.createSarah(newSarah);
  }

  @Public()
  @Patch(':id')
  updateSarah(@Param('id') id: string, @Body() updatedSarah: UpdateProjectDto) {
    return this.sarahService.updateSarah(id, updatedSarah);
  }

  @Public()
  @Delete(':id')
  deleteOneSarah(@Param('id') id: string) {
    return this.sarahService.removeSarah(id);
  }

  @Public()
  @Delete()
  clearSarahDatabase() {
    return this.sarahService.clearSarahDatabase();
  }
}
