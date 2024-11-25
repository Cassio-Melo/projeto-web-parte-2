/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Projeto2Module } from './projeto2/projeto2.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateusburkle:mateus1@cluster0.tyhr9.mongodb.net/Mateus?retryWrites=true&w=majority'
    //  'mongodb+srv://mateusburkle:<db_password>@cluster0.tyhr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
      //'mongodb+srv://Carlos:Carloseduardo1@users.2t1rm.mongodb.net/Users?retryWrites=true&w=majority&appName=Users',

    Projeto2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
