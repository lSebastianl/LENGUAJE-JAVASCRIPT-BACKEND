//instalar dependencias
import  Express  from "express";
import rutas from "./rutas/rutas.js";
import mongoose  from "mongoose";
import bodyParser from "body-parser";


//crear objeto express
const app = Express()
const puerto = 3000

//crear extencion mongo:
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/juegos_trabajo")

//body-parser
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())



/*cross*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//traer rutas
rutas(app)


//crear el servidor de pruebas
app.listen( puerto , function(){
    console.log(`Servidor prueba de juegos puerto ${puerto}`)
    // console.log(heroes)
})

// app.get( '/heroes', function( request , response ){
//     response.send(heroes)
// } )

// app.get( '/heroes/:nombre', function( request , response ){
//     let heroe = _.find(heroes,{name: request.params.nombre})
//     response.send(heroe)
// } )

