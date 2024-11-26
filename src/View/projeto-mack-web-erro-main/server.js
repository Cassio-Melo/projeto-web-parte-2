/* eslint-disable prettier/prettier */

import express from 'express';
import getRoutes from './rotas/getRoutes.js';
import putRoutes from './rotas/putRoutes.js';
import postRoutes from './rotas/postRoutes.js';
import deleteRoutes from './rotas/deleteRoutes.js';

const server= express();

// Middleware para parsear JSON, para processar o corpo da requisicao em formato JSON
server.use(express.json());

// Middleware para servir arquivos estáticos da pasta "public"
server.use(express.static('public'));

server.use(getRoutes);
server.use(putRoutes);
server.use(postRoutes);
server.use(deleteRoutes);

server.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
