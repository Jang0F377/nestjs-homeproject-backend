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
import { ProjectDto } from 'src/projects/dto/project.dto';
import { UpdateProjectDto } from 'src/projects/dto/update-project.dto';
import { SarahService } from './sarah.service';

@Controller('sarah')
export class SarahController {
  constructor(private readonly sarahService: SarahService) {}
  @Get()
  returnAllSarahs() {
    return this.sarahService.returnAllSarah();
  }
  @Get(':id')
  returnOneSarah(@Param('id') id: string) {
    return this.sarahService.findOneSarah(id);
  }

  @Post()
  createSarah(@Body() newSarah: ProjectDto) {
    return this.sarahService.createSarah(newSarah);
  }

  @Patch(':id')
  updateSarah(@Param('id') id: string, @Body() updatedSarah: UpdateProjectDto) {
    return this.sarahService.updateSarah(id, updatedSarah);
  }

  @Delete(':id')
  deleteOneSarah(@Param('id') id: string) {
    return this.sarahService.removeSarah(id);
  }

  @Delete()
  clearSarahDatabase() {
    return this.sarahService.clearSarahDatabase();
  }
}
