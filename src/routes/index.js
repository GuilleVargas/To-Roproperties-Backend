/**
 * TODO: ESTE ARCHIVO SIRVE PARA CREAR LAS RUTAS
 * */

//Requiero desde express la funcion Router
const express = require('express');
//Ejecuto la función Router, y el objeto que me devuelve lo guardo en una const
const router = express.Router();    //El objeto router me sirve para definir urls

//Importo el modelo del usuario y de la vivienda para poder interacturar con la DB
const User = require("../models/User");
const house = require("../models/Houses");

//Requiero el modelo jsonwebtoken
const jwt = require("jsonwebtoken");

//Requiero el house.controller
const hsCtrl = require('../controllers/house.contoller');


/**RUTA INICIAL
 * ! Vamos a utilizarla como nuestra Rest API
 * ? Para enviar y recibir datos en formato JSON
*/
router.get("/", hsCtrl.getHouses); //Así es más limpio, ya que la función está definida en otro archivo (controller/house.controller.js)
router.post("/", hsCtrl.createHouses); //Con este guardo datos, ya que es un post
router.get("/:id", hsCtrl.getHouse); //Pido una sola casa mediante el id
router.put("/:id",hsCtrl.editHouse) //Para editar las casas, le pasamos el id porque voy a actualizar una casa en específico
router.delete("/:id",hsCtrl.deleteHouse) //Para eliminar las casas, le pasamos el id porque voy a eliminar una casa en específico

//RUTA REGISTRAR USUARIO
router.post("/signup", async (req, res) => {
  const { email, password } = req.body; //Guardo en un const desde req.body lo que extraiga de email y pass
  const newUser = new User({ email, password }); //Crear un nuevo usuario
  console.log(newUser); //Guarda el usuario
  await newUser.save(); //await avisa de un metodo asincrono, entonces va haciendo otras cosas mientras
  /*Con esto creo el token, la función sign() tiene tres parámetros (dato que queremos guardar dentro del token,
  palabra secreta y las opciones(no es obligatorio) )*/
  const token = jwt.sign({ _id: newUser._id }, "secretKey");
  //Devuelvo el token al cliente
  res.status(200).json({ token }); //Codigo de estado 200
});

//RUTA REGISTRAR CASA
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

//RUTA LOGIN USUARIO
router.post("/signin", async (req, res) => {
  const { email, password } = req.body; //Desde request body recibo un email y una contraseña, para validarlo desde el back
  //Busco si el correo se encuentra en la DB
  const user = await User.findOne({ email });
  if (!user)
    return res
      .status(401)
      .send(
        "The email doesn't exists"
      ); /*Si es diferente de la constante user que hemos creado
  significa que el correo no existe, y muestro el msj*/
  //Si pasa, compruebo la contraseña
  if (user.password !== password) return res.status(401).send("Wrong password");
  //Si todo es correcto pues puedo crear y devolver un token
  const token = jwt.sign({ _id: user._id }, "secretKey"); //La clave tiene que ser igual que la que puse en registar usuario
  return res.status(200).json({ token }); //Devuelvo el token
});

//RUTA PARA DEVOLVER DATOS, porque el login y el registro devuelve un token
router.get('/tasks', (req, res) => {
  res.json([
      {
          _id: '1',
          name: "task one",
          description: 'asdadasd',
          date: "2019-11-06T15:50:18.921Z"
      },
      {
          _id: '2',
          name: "task two",
          description: 'asdadasd',
          date: "2019-11-06T15:50:18.921Z"
      },
      {
          _id: '3',
          name: "task three",
          description: 'asdadasd',
          date: "2019-11-06T15:50:18.921Z"
      },
  ])
});

router.get('/private-tasks',verifyToken, (req, res) => {
  res.json([
      {
          _id: '1',
          name: "task one",
          description: 'asdadasd',
          date: "2019-11-06T15:50:18.921Z"
      },
      {
          _id: '2',
          name: "task two",
          description: 'asdadasd',
          date: "2019-11-06T15:50:18.921Z"
      },
      {
          _id: '3',
          name: "task three",
          description: 'asdadasd',
          date: "2019-11-06T15:50:18.921Z"
      },
  ])
});

router.get('/private-user',verifyToken, (req, res) => {
  res.send(req.userId);
})


function verifyToken(req, res, next) {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		const token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}
		const payload = jwt.verify(token, 'secretKey')
    req.userId=payload._id;
    next();
}

module.exports = router;
