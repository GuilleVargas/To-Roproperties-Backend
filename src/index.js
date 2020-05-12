/*ESTE ARCHIVO SIRVE PARA ARRANCAR EL SERVIDOR*/

//Requiero el modulo express y lo guardo en una constante con el mismo nombre
const express = require('express');
//Ejecuto el modulo express, y el objeto que me devuelve el servidor lo guardo en app
const app = express(); 

//Para que funcione el database.js hay que requerirlo
require('./database');

//Para que use el metido json desde express
app.use(express.json()); //Convierte los datos que recibe el server a un formato de js que puedo manipular

//Para que funcionen las rutas
app.use(require('./routes/index')); 

//Inicio la aplicación
app.listen(3000); /*Quiero que escuche en el puerto 3k*/
console.log('Server is conected on port', 3000);/*Muestro por consola el siguiente msj*/