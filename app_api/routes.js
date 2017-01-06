var express = require('express'),
    router = express.Router(),
    jwt = require('express-jwt'),
    auth = jwt({
        secret: 'MY_SECRET',
        userProperty: 'payload'
    }),
    profileCtrl = require('./controllers/profile'),
    authCtrl = require('./controllers/authentication');

router.get('/profile', auth, profileCtrl.getProfile);
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

module.exports = router;