var passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.register = function (req,res) {
    var user = new User();
    
    user.name = req.body.name;
    user.email = req.body.email;
    
    user.setPassword(req.body.password)
    
    user.save(function(err){
        var token;
        token = user.generateJWT()
        res.status(200)
        res.json({
            token: token
        })
    })
}

module.exports.login = function (req,res) {
    
}