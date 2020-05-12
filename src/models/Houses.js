/*ESTE ARCHIVO SIRVE PARA GUARDAR LOS DATOS DE LAS VIVIENDAS*/

/*Voy a requerir el método Schema y model, que van a venir desde mongoose*/
const{ Schema, model } = require('mongoose');

/*Creo un nuevo esquema guardándola en una const,
 y dentro de un nuevo objeto voy a definir que datos guardo*/
const houseSchema = new Schema({
    w_search: String,
    type: String,
    province: String,
    population: String,
    room: Number,
    bath: Number,
    meters: Number
},{
    timestamps: true //Añade dos campos, fecha creación y modificación
});

/*Creo un nuevo modelo ejecutando la funcion model, recibiendo dos parámetros,
 el nombre del modelo y el esquema/Schema en el que está basado */
module.exports = model('House', houseSchema); /*Lo exporto para así poder usarlo en 
otra parte de la aplicación*/