const Posts = require('../controllers/posts.controller');

module.exports = ((app,router) => {
    router.post('/', Posts.createPosts)
    
    app.use("/api/postsService", router);
})
// 