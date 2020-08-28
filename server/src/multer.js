const multer = require('multer');

// storage

const storage = multer.diskStorage({
    destination: './uploads',
    filename: ((req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    })
})

// file validation

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true)
    } else {
        cb({
            message: 'Unsupported File Format'
        },false
        )
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter: fileFilter
}).single('image');

module.exports = upload;