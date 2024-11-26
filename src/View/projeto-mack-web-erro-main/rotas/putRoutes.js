/* eslint-disable prettier/prettier */

import express from 'express';
const router = express.Router();


router.put('/resetsenha', (req, res) => {
    const { email, password } = req.body; 
    res.status(200).send(`Senha alterada com sucesso para o email ${email, password}`);
});

router.put('/cadastro', (req, res) => {
    const { nome, email } = req.body; 
    res.status(200).send(`Dados do usuário ${nome, email} atualizados com sucesso.`);
});

router.put('/compra', (req, res) => {
    const { itemId, quantidade } = req.body;
    console.log(`Item ${itemId} atualizado para quantidade ${quantidade}.`);
    res.status(200).send(`Quantidade do item ${itemId} atualizada para ${quantidade}.`);
});


export default router;

