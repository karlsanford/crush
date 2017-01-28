var express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt'),
    auth = jwt({
        secret: 'MY_SECRET',
        userProperty: 'payload'
    }),
    profileCtrl = require('./controllers/profile'),
    authCtrl = require('./controllers/authentication'),
    test = require('./controllers/test');

router.get('/profile', auth, profileCtrl.getProfile);
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

router.get('/test',test)



module.exports = router;