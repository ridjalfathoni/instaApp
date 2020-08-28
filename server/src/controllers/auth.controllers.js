const db = require('../models');
const Users = db.users;
const helper = require('../helper');

module.exports = {
    test(req, res) {
      res.status(200).send({
          message: "test"
      })
    },
    async login(req, res) {
        const {username, password} = req.body;
        const query = {
            username: username
        }
        try {
            // await Adventure.findOne({ country: 'Croatia' }).exec();
            const user = await Users.find(query);
            console.log("password", password);
            console.log("user1", user);
            console.log("user2", user[0].password);
            const halo = await helper.bcryptCompareSync(password, user[0].password);
            console.log("halo", halo);

            // res.json(user)
            if (helper.bcryptCompareSync(password, user[0].password)) {
                let userData = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
                
                let token = helper.generateToken(userData);
                let refreshToken = helper.generateRefreshToken(userData);
                res.json({
                    data: {
                        token: token,
                        refreshToken: refreshToken,
                    },
                    success: true
                })
            } else {
                res.status(400).send({
                    success: false,
                    message: "Password anda Salah"
                });
            }
        } catch (error) {
            res.json({
                message: error
            })
        }
    },
    async registerUser(req, res) {
        const {username, email, password, nama} = req.body;
        const user = new Users({
            username: username,
            email: email,
            password: password,
            nama: nama
        })
        
        try {
            const saveUser = await user.save();
            res.json(saveUser);
        } catch (err) {
            const keyValue = err.keyValue;
            const key = Object.keys(keyValue);
            res.status(400).json({
                message: `${key} ${keyValue[key]} Sudah Ada`
            })
        }
    }
}