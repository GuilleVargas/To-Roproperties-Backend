/**ESTE ARCHIVO SIRVE PARA CONECTAR LA DB
 * ! INFO!!! No solo sirve para guardar datos sin estructura, sino que también podemos utilizar el módulo de
 * ! mongoose para modelar los datos que vamos a estar guardando
 */

/**Requiero el modulo de mongoose y lo guardo en una constante con el mismo nombre
 *! Mongoose se instala como dependencia pq es necesario, también sirve para modelar los datos
 */
const mongoose = require("mongoose");
const URI = "mongodb://localhost/toroproperties"; //Defino la conexión de mongo en la constante URI

/*Utilizo la const para conectarme. Tiene un metodo llamado connect, recibe un string con la direccíon de la db.
Si la DB no existe, este la crea por mi. ('protocoloDB://localhost/nombre_db')*/
mongoose.connect(URI, { //Necesita parámetro de conexión
    useNewUrlParser: true, //Configuraciones que necesita para que no haya error
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Database is Conncted")) //Si se conecta muestra ese msj
  .catch((err) => console.log(err)); //Si existe error, lo captura y muestra

  module.exports = mongoose; //Devuelve la conexión, ya que lo estamos exportando
