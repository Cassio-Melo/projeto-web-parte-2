/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const Projeto2Schema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  endereco: { type: String, required: true},
  telefone: {type: String, required: true}
});

export interface Projeto2 extends mongoose.Document {
  id: string;
  nome: string;
  email: string;
  senha: string;
  endereco: string;
  telefone: string;
}

