// import _ from "lodash";
// import heroes from "./heroes.js";
import {addjuego,getJuegos,getJuegoById,deleteJuegoId} from "../controller/ContactoController.js";
        
//EndPoints del proyecto // ponen info solo en JSON
//Deben ser rutas REST

const rutas = ( app ) => {
    app.route('/juegos')
        .get(getJuegos)
        .post(addjuego)
    app.route('/juegos/:juegosid')
        .get(getJuegoById)
    app.route('/juegos/delete/:juegosid')
        .get(deleteJuegoId)
}
export default rutas; 







