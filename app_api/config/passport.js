var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
function(username, password, done){
    User.findOne({email:username},function(err,user){
        if(err) { return done(err)}
        if(!user) {
            return done(null,false,{
                message: 'user not in database'
            })
        }
        if(!user.validPassword(password)) {
            return done(null,false,{
                message: 'incorrect password'
            })
        }
        return done(null,user)
    })
}))

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});