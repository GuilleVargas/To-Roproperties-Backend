/**
 * TODO: ESTE ARCHIVO SIRVE PARA ARRANCAR EL SERVIDOR
 */

//Requiero el modulo express y lo guardo en una constante con el mismo nombre
const express = require("express");
//Ejecuto el modulo express, y el objeto que me devuelve el servidor lo guardo en app
const app = express();
const morgan = require("morgan");
const cors = require("cors");
//Añado en una constante el módulo cors, este módulo añade cabeceras a la petición para poder ser pasado a este servidor

//SETTINGS
app.set("port", process.env.PORT || 3000); //Utiliza el puerto que te dé la nube o en caso contrario el puerto 3k

/**
 * MIDDLEWARES
 * ! Realizar la conversión para que el servidor pueda entender los datos
 * ? Morgan no es esencial, pero nos ayuda a ver por consola lo que el usuario pide
 */
app.use(morgan("dev"));
app.use(express.json()); //Nos ayuda a entender el código que viene en formato JSON desde el navegador, y asi el server lo entiende
app.use(cors({origin: 'http://localhost:4200'}));

//Para que funcione el database.js hay que requerirlo
 require("./database");


/**
 * ROUTES
 * ! Aquí vamos requiriendo las diferentes rutas en tengamos en la carpeta routes
 * ? Ahora mismo sólo tenemos la de index.js
 */
app.use( require("./routes/index"));

//Inicio la aplicación // Starting the server
app.listen(app.get("port"), () => {
  console.log(
    "Server is conected on port",
    app.get("port")
  ); /*Muestro por consola el siguiente msj*/
}); /*Quiero que escuche en el puerto 3k*/
