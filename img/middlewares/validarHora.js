const validarHora = (req, res, next) => {
    const currentHour = req.currentHour;
    if (currentHour < 14) {
        res.locals.mensaje = 'Aún no es la hora, espera hasta las 14:00 para entrar';
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
};

module.exports = validarHora;