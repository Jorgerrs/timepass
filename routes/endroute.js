const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a la ruta final</h1>
        <p>Has accedido correctamente a: /endroute</p>
    `);
});

module.exports = router;