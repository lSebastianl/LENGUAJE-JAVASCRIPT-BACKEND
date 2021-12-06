import mongoose  from "mongoose";

//Definir un objeto schema
const Schema = mongoose.Schema

//Definir estructura de entidades a registrar
const JuegoSchema = new Schema (
    {
        nombre:{
            type: String,
            required: "Nombre vacio"
        },
        tipo:{
            type: String,
            required: "tipo"
        },
        empresa:{   
            type: String,
        },
        plataforma:{
            type: String,
        },
        exclusivo:{
            type: String,
        },
        fecha_registro:{
            type: Date,
            default: Date.now
        }
    }
)
export default JuegoSchema

