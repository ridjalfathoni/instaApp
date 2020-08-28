const Like = require('../controllers/likes.controllers');

module.exports = ((app,router) => {
    router.post('/', Like.test)
    
    app.use("/api/likeService", router);
})
// 