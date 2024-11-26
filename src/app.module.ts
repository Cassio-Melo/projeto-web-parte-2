/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Projeto2Module } from './projeto2/projeto2.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateusburkle:mateus1@cluster0.tyhr9.mongodb.net/Mateus?retryWrites=true&w=majority',
    ),
    Projeto2Module,
  ],
})
export class AppModule {}
