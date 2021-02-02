//usar express
const express = require("express");
const app = express();
const port = 8000;

//usar sesiones
//const session = require('express-session');
//app.use(session({secret: 'miclave'})); 

//usar carpet static
app.use(express.static(__dirname + "/static"));

//usar vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//para manejar formulario
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/", (req, res) => {
  res.render('index');   
});


app.post('/result', function (req, res){
  const info=req.body;
  res.render('result', {
    nombre: req.body.nombre,
    location: req.body.location,
    lenguaje: req.body.lenguaje,
    comentario:req.body.comentario,

  });
  
});

app.listen( 8000, () => console.log(`Listening on port: ${port}`));



