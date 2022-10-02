import { PartialType } from '@nestjs/mapped-types';
import { MattDto } from './matt.dto';

export class UpdateMattDto extends PartialType(MattDto) {}
