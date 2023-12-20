const jwt = require('jsonwebtoken');

const verifyCookies = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send({ message: 'Access denied' });
    }

    // Verifikasi token
    jwt.verify(token, 'key', (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Invalid token' });
        }

        // Token valid, decoded berisi informasi yang dienkripsi dalam token
        const userId = decoded.userId;

        // Lanjutkan dengan logika Anda menggunakan userId atau informasi lain yang diperoleh dari token
        next()
    });
};

module.exports = {verifyCookies}
