var express = require('express'),
    app = express();

app.set('views','views')
app.get('/',function(req,res){
    res.render('index.ejs')
})

app.use(express.static('node_modules'))

app.listen(3333,function(){
    console.log('port 3333')
})
