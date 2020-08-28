module.exports = ((app,router) => {
    require('./posts.routes')(app,router);
    require('./comments.routes')(app,router);
    require('./likes.routes')(app,router);
    require('./posts.routes')(app,router);
    require('./uploads.routes')(app,router);
    require('./auth.routes')(app,router);
})