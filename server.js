var express = require('express'),
    app = express(),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    port = config.port,
    path = require('path'),
    //favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    multer = require('multer'),
    apiRoutes;


//set up view engine (ejs default)
app.set('views', path.join(__dirname, 'views'))

//basix
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

//mongoose
require('./server/config/mongoose')


app.use(passport.initialize());
app.use(passport.session({secret: 'secret'}));
//app.use(multer());


require('./app_api/models/user')
require('./app_api/config/passport')

//routes

apiRoutes = require('./app_api/routes')

app.get('/',function(req,res){
    res.render('index.ejs')
})

app.use('/api',apiRoutes);

//serve up static files
app.use(express.static(path.join(__dirname, 'node_modules' )))
app.use(express.static(path.join(__dirname, 'client')))

//start listening
app.listen(port,function(){
    console.log('listening on port ' + port)
})
