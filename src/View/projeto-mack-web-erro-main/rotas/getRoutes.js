/* eslint-disable prettier/prettier */

import express from 'express';
const router = express.Router();

router.get('/index', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

router.get('/cadastro', (req, res) => {
    res.sendFile('cadastro.html', { root: 'public' });
});

router.get('/compra', (req, res) => {
    res.sendFile('compra.html', { root: 'public' });
});

router.get('/hardware', (req, res) => {
    res.sendFile('hardware.html', { root: 'public' });
});

router.get('/login', (req, res) => {
    res.sendFile('login.html', { root: 'public' });
});

router.get('/quemsomos', (req, res) => {
    res.sendFile('quemsomos.html', { root: 'public' });
});

router.get('/resetsenha', (req, res) => {
    res.sendFile('resetsenha.html', { root: 'public' }); // pode ser private porem, precisa do backend para fazer um protecao com o token, por exemplo
});

router.get('/software', (req, res) => {
    res.sendFile('software.html', { root: 'public' });
});

export default router;
