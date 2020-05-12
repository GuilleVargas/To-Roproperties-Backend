/*ESTE ARCHIVO SIRVE PARA CREAR LAS RUTAS*/

//Requiero desde express la funcion Router
const { Router } = require("express");
//Ejecuto la función Router, y el objeto que me devuelve lo guardo en una const
const router = Router(); //El objeto router me sirve para definir urls

//Importo el modelo del usuario y de la vivienda para poder interacturar con la DB
const user = require("../models/User");
const house = require("../models/Houses");

//Vamos a requerir el modelo jsonwebtoken
const jwt = require("jsonwebtoken");

//RUTA INICIAL
router.get("/", (req, res) => res.send("Hello world"));

//RUTA REGISTRAR USUARIO
router.post("/signup", async (req, res) => {
  const { email, password } = req.body; //Guardo en un const desde req.body lo que extraiga de email y pass
  const newUser = new user({ email, password }); //Crear un nuevo usuario
  console.log(newUser); //Guarda el usuario
  await newUser.save(); //await avisa de un metodo asincrono, entonces va haciendo otras cosas mientras
  /*Con esto creo el token, la función sign() tiene tres parámetros (dato que queremos guardar dentro del token,
  palabra secreta y las opciones(no es obligatorio) )*/
  const token = jwt.sign({ _id: newUser._id }, "secretKey");
  //Devuelvo el token al cliente
  res.status(200).json({ token }); //Codigo de estado 200
});

//REGISTRAR CASA
router.post("/reghouse", async (req, res) => {
  const { w_search, type, province, population, room, bath, meters } = req.body;
  const newHouse = new house({
    w_search,
    type,
    province,
    population,
    room,
    bath,
    meters,
  }); //Crear un nuevo piso
  console.log(newHouse); //Guarda el piso
  await newHouse.save();
  const token = jwt.sign({ _id: newHouse._id }, "secretKey");
  res.status(200).json({ token });
});

module.exports = router;
