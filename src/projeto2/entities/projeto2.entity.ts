/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Projeto2 extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const Projeto2Schema = SchemaFactory.createForClass(Projeto2);