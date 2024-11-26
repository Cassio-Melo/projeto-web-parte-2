/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Projeto2 } from './entities/projeto2.entity'; 
import { CreateProjeto2Dto } from './dto/create-projeto2.dto';
import { UpdateProjeto2Dto } from './dto/update-projeto2.dto';

@Injectable()
export class Projeto2Service {
  constructor(
    @InjectModel(Projeto2.name) private readonly projeto2Model: Model<Projeto2>,
  ) {}

  async create(createProjeto2Dto: CreateProjeto2Dto): Promise<Projeto2> {
    const newProjeto = new this.projeto2Model(createProjeto2Dto);
    return newProjeto.save();
  }

  async findAll(): Promise<Projeto2[]> {
    return this.projeto2Model.find().exec();
  }

  async findOne(id: string): Promise<Projeto2> {
    const projeto = await this.projeto2Model.findById(id).exec();
    if (!projeto) {
      throw new NotFoundException(`Projeto com ID ${id} não encontrado.`);
    }
    return projeto;
  }

  async update(id: string, updateProjeto2Dto: UpdateProjeto2Dto): Promise<Projeto2> {
    const updatedProjeto = await this.projeto2Model
      .findByIdAndUpdate(id, updateProjeto2Dto, { new: true })
      .exec();
    if (!updatedProjeto) {
      throw new NotFoundException(`Projeto com ID ${id} não encontrado.`);
    }
    return updatedProjeto;
  }

  async remove(id: string): Promise<Projeto2> {
    const deletedProjeto = await this.projeto2Model.findByIdAndDelete(id).exec();
    if (!deletedProjeto) {
      throw new NotFoundException(`Projeto com ID ${id} não encontrado.`);
    }
    return deletedProjeto;
  }
}