import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Matt extends Document {
  @Prop()
  name: string;
  @Prop()
  priority: number;
}

export const MattSchema = SchemaFactory.createForClass(Matt);
