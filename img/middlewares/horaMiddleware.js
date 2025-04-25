const horaMiddleware = (req, res, next) => {
    const now = new Date();
    req.currentHour = now.getHours();
    req.currentTime = now.toLocaleTimeString();
    next();
};

module.exports = horaMiddleware;