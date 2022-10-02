import { PartialType } from '@nestjs/mapped-types';
import { SarahDto } from './sarah.dto';

export class UpdateSarahDto extends PartialType(SarahDto) {}
