/*ESTE ARCHIVO SIRVE PARA ARRANCAR EL SERVIDOR*/
//Requiero el modulo express y lo guardo en una constante con el mismo nombre
const express = require('express');
//Ejecuto el modulo express, y el objeto que me devuelve el servidor lo guardo en app
const app = express(); 

//Inicio la aplicación
app.listen(3000); /*Quiero que escuche en el puerto 3k*/
console.log('Server is conected on port', 3000);/*Muestro por consola el siguiente msj*/