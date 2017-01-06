var crypto = require('crypto'),
    jwt = require('jsonwebtoken'),
    mongoose = require('mongoose');
    

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
}

userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return hash === this.hash;
}

userSchema.methods.generateJWT = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        exp: parseInt(expiry.getTime() / 1000)
    },"MY_SECRET") //TODO PUT IN ENV VAR
}

mongoose.model('User', userSchema)

