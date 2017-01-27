var passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports.register = function (req,res) {
    console.log('register')
    
    var user = new User();
    
    user.name = req.body.name;
    user.email = req.body.email;
    
    user.setPassword(req.body.password)
    console.log(user)
    user.save(function(err){
        //console.log('reg user save')
        if(err) {
            res.status(500)
            res.json(err.message)
        } else {
            var token;
            token = user.generateJWT()
            res.status(200)
            res.json({
                token: token
            })
        }
            
        
    })
}

module.exports.login = function (req,res) {
    
}