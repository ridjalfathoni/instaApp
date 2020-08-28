const Auth = require('../controllers/auth.controllers');

module.exports = ((app,router) => {
    router.post('/', Auth.test);
    router.post('/signUp', Auth.registerUser);
    router.post('/login', Auth.login);
    
    app.use("/api", router);
})
// 