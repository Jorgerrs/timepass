const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje ? `<p style="color:red;">${req.query.mensaje}</p>` : '';
    
    res.send(`
        <h1>Bienvenido a la aplicación</h1>
        <p>La hora actual es: ${req.currentTime}</p>
        ${mensaje}
        <button onclick="location.href='/endroute'">Entrar a la ruta final</button>
    `);
});

module.exports = router;