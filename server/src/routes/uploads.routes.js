const Uploads = require('../controllers/upload.controller');
const upload = require('../multer');

module.exports = ((app,router) => {
    router.post('/testUpload', Uploads.uploads)
    
    app.use("/api", router);
})