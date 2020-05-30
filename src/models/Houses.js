/**
 * TODO: ESTE ARCHIVO SIRVE PARA GUARDAR LOS DATOS DE LAS VIVIENDAS
* ! Aquí vemos como lucen los datos dentro de mongodb
*/

/*Voy a requerir el método Schema y model, que van a venir desde mongoose*/
const{ Schema, model } = require('mongoose');

/*Creo un nuevo esquema guardándola en una const,
 y dentro de un nuevo objeto voy a definir cómo van a lucir mis datos*/
const HouseSchema = new Schema({
    w_search: { type: String, required: true},
    type: { type: String, required: true},
    province: { type: String, required: true},
    population: { type: String, required: true},
    room: { type: Number, required: true},
    bath: { type: Number, required: true},
    meters: { type: Number},
    price: { type: Number, required: true}
},{
    timestamps: true //Añade dos campos, fecha creación y modificación
});

/*Creo un nuevo modelo ejecutando la funcion model, recibiendo dos parámetros,
 el nombre del modelo y el esquema/Schema en el que está basado */
module.exports = model('House', HouseSchema); /*Lo exporto para así poder usarlo en 
otra parte de la aplicación*/ 