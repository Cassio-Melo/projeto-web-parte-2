/* eslint-disable prettier/prettier */
import { IsString, IsEmail } from 'class-validator';

export class CreateProjeto2Dto {
  @IsString()
  name: string;

  @IsEmail()
  email: string; // Adiciona a tipagem e validação para o email
}