const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) return res.sendStatus(401).json({ error: 'Kein Token'});

    const token = auth.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(403).json({ error: 'Ungültiger Token' });
    }
}

module.exports = authMiddleware;