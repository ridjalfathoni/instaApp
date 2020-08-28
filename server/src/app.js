require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
let router = require('express').Router();

const upload = require('./multer');

const cloudinary = require('./cloudinary');

const fs = require('fs');

//  Models
const db = require("./models");

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
require('./routes/index')(app,router)

const PORT = process.env.PORT || 8080;

// app.use('/upload-image', upload.array('image'), async (req, res) => {
//     const uploader = async (path) => await cloudinary.uploads(path, 'Images');
    
//     if (req.method === 'POST') {
//         const urls = []

//         const files = req.files
//         console.log("rikues", req);
//         console.log("rikues files", req.files);
//         for (const file of files) {
//             const { path } = file;

//             const newPath = await uploader(path);

//             urls.push(newPath)

//             fs.unlinkSync(path)
//         }
//         res.status(200).json({
//             message: 'upload success',
//             data: urls
//         })
//     } else {
//         res.status(405).json({
//             err: "image not uploaded"
//         })
//     }
// })

app.listen(PORT, () => {
    console.log(`Server Berjalan di http://localhost:${PORT}`);
})