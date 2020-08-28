const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
module.exports = {
    generateToken(userData) {
        return jwt.sign(userData, process.env.SECRET_KEY, {
            expiresIn: '15s'
        })
    },
    generateRefreshToken(userData) {
        return jwt.sign(userData, process.env.REFRESH_TOKEN, {
            expiresIn: '7d'
        })
    },
    async bcryptCompareSync(password, comparePassword) {
        console.log("password", password);
        console.log("password", comparePassword);
        return await bcrypt.compare(password, comparePassword)
    },
    bcryptHash(password) {
        return bcrypt.hashSync(password, 10)
    }
}