/* eslint-disable prettier/prettier */

import express from 'express';
const router = express.Router();
router.post('/compra', (req, res) => {
    const { itemId, quantidade } = req.body;
    console.log(`Item ${itemId} com quantidade ${quantidade} adicionado ao carrinho.`);
    res.status(201).send(`Item ${itemId} adicionado ao carrinho com sucesso.`);
});

export default router;