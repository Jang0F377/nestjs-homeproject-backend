import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sarah extends Document {
  @Prop()
  name: string;
  @Prop()
  priority: number;
}

export const SarahSchema = SchemaFactory.createForClass(Sarah);
