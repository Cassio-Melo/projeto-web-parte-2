/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

// define o esquema para o modelo projeto2
export const Projeto2Schema = new mongoose.Schema({
    //campos do tipo string
    nome: { type: String, required: true },
    email: { type: String, required: true }
}, { collection: 'projeto2' }); // define a coleção como projeto2

export interface Projeto2 extends mongoose.Document {
    readonly id: string; // Alias para _id, se necessário
    nome: string;
    email: string;
}
