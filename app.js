var exp=require('express');
var handlers=require('./routes/routes.js');
var app=exp();
app.set('view engine','ejs');


app.get('/',handlers.homefn);


app.get('/:city',handlers.cityfn);

var port=process.env.PORT||2000
app.listen(port,function()
{
    console.log("port 2000");
});