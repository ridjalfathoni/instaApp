// const { Schema } = require("mongoose");
// const bcrypt = require('bcrypt');
// module.exports = (mongoose) => {
//     const Users = mongoose.model('users', mongoose.Schema({
//         username: {
//             type: String,
//             unique: true
//         },
//         password: {
//             type: String
//         },
//         email: {
//             type: String,
//             unique: true
//         },
//         nama: {
//             type: String,
//             unique: true
//         }
//     }))
//     return Users;
// }

const { Schema } = require("mongoose");
const bcrypt = require('bcrypt');
const helper = require("../helper");

module.exports = (mongoose) => {
    const Users = mongoose.Schema({
        username: {
            type: String
        },
        password: {
            type: String
        },
        email: {
            type: String
        },
        nama: {
            type: String
        }
    })
    Users.pre('save', function (next) {
        let users = this;

        if (!users.isModified('password' && !users.password)) {

            next();

        } else {
            users.password = helper.bcryptHash(users.password);
            next();
        }
    })

    return mongoose.model('users', Users);
}