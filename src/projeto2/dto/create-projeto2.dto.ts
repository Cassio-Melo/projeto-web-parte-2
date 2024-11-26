/* eslint-disable prettier/prettier */
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateProjeto2Dto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  endereco: string;
  
  @IsString()
  telefone: string;

  @IsString()
  @MinLength(4,{message:'A senha deve ter no mínimo 4 caracteres.'})
  senha:string;
}