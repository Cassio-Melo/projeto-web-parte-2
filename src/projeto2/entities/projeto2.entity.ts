/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Projeto2 extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({required: true})
  endereco: string; 

  @Prop({required: true})
  telefone: string; 
}

export const Projeto2Schema = SchemaFactory.createForClass(Projeto2);

