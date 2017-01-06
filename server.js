var express = require('express'),
    app = express(),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env],
    port = config.port,
    path = require('path')


//config
app.set('views','views')

//routes
app.get('/',function(req,res){
    res.render('index.ejs')
})

app.get('/api/users',function (req, res) {
    res.send('users')
})

app.use(express.static(path.join(__dirname, 'node_modules' )))
app.use(express.static(path.join(__dirname, 'client')))

//start listening
app.listen(port,function(){
    console.log('listening on port ' + port)
})
