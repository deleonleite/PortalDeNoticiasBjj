var app = require('./config/server');

var rotaformularioinclusaonoticias = require('./app/routes/formularioinclusaonoticia')(app);

var rotahome = require('./app/routes/home')(app);

var rotanociticas = require('./app/routes/noticias')(app);


app.listen(3009, function(){
    console.log('servidor rodando com express');
});