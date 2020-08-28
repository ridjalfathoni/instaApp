const Comment = require('../controllers/comments.controllers');

module.exports = ((app,router) => {
    router.post('/', Comment.test)
    
    app.use("/api/commentService", router);
})