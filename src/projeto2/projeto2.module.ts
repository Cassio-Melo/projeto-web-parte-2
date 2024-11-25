/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Projeto2Service } from './projeto2.service';
import { Projeto2Controller } from './projeto2.controller';
import { Projeto2, Projeto2Schema } from './entities/projeto2.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Projeto2.name, schema: Projeto2Schema }]),
  ],
  controllers: [Projeto2Controller],
  providers: [Projeto2Service],
})
export class Projeto2Module {}

