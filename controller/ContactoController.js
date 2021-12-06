import { request, response } from "express";
import mongoose  from "mongoose";
import JuegoSchema from "../models/ContactoModel.js";

//DAO de contacto
const Juegos = mongoose.model('juegos', JuegoSchema)



//accion para insertar una nueva juegos
export const addjuego = ( request, response ) => {
    // crear nueva juegos
    let nuevoJuego = new Juegos( request.body )
    // grabar nueva juegos
    nuevoJuego.save( ( error , juegos) => {
        if(error){
            response.send(error)
        }else{
            response.json(juegos)
        }
    })
}




//Accion para seleccionar todas las personas:
export const getJuegos = ( request, response) => {
    Juegos.find( {}, ( error , juegos) => {
        if(error){
            response.send(error)
        }else{
            response.json(juegos)
        }
    })
}

export const getJuegoById = ( request, response ) =>{
    Juegos.findById( request.params.juegosid, ( error , juego) => {
        if(error){
            response.send(error)
        }else{
            response.json(juego)
        }
    })
    
}


export const deleteJuegoId = ( request, response )=>{
    Juegos.deleteOne( { _id: request.params.juegosid} , ( error , juego) => {
        if(error){
            response.send(error)
        }else{
            response.json({mensaje: "persona borrada "})
        }
    } )    
}






