import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Matt extends Document {
  @Prop()
  name: string;
  @Prop()
  priority: number;
  @Prop({
    _id: false,
    required: false,
    default: { cost: 0, savedTowardCost: 0 },
    type: {
      cost: Number,
      savedTowardCost: Number,
    },
  })
  details: Record<string, any>;
}

export const MattSchema = SchemaFactory.createForClass(Matt);
