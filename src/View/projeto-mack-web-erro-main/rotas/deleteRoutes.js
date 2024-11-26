/* eslint-disable prettier/prettier */
import express from 'express';
const router = express.Router();

router.delete('/compra', (req, res) => {
    const { itemId } = req.body;
    console.log(`Item ${itemId} removido do carrinho.`);
    res.status(200).send(`Item ${itemId} removido do carrinho com sucesso.`);
});

export default router;