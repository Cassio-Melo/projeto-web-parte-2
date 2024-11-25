/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Projeto2Service } from './projeto2.service';
import { CreateProjeto2Dto } from './dto/create-projeto2.dto';
import { UpdateProjeto2Dto } from './dto/update-projeto2.dto';

@Controller('projeto2') // Rota base: /projeto2
export class Projeto2Controller {
  constructor(private readonly projeto2Service: Projeto2Service) {}

  @Post()
  create(@Body() createProjeto2Dto: CreateProjeto2Dto) {
    return this.projeto2Service.create(createProjeto2Dto);
  }

  @Get()
  findAll() {
    return this.projeto2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projeto2Service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjeto2Dto: UpdateProjeto2Dto) {
    return this.projeto2Service.update(id, updateProjeto2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projeto2Service.remove(id);
  }
}


