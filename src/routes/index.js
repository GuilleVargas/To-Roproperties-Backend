/*ESTE ARCHIVO SIRVE PARA CREAR LAS RUTAS*/

//Requiero desde express la funcion Router
const {Router} = require('express');
//Ejecuto la función Router, y el objeto que me devuelve lo guardo en una const
const router = Router();                                   //El objeto router me sirve para definir urls

//Importo el modelo del usuario para poder interacturar con la DB
const user = require('../models/User');
const house = require('../models/Houses')


//RUTA INICIAL
router.get('/', (req, res) => res.send('Hello world'));

//RUTA REGISTRAR USUARIO
router.post('/signup', async (req, res) => {
    const {email, password } = req.body;          //Guardo en un const desde req.body lo que extraiga de email y pass
    const newUser = new user({email, password}); //Crear un nuevo usuario
    console.log(newUser);                       //Guarda el usuario
    await newUser.save();                      //await avisa de un metodo asincrono, entonces va haciendo otras cosas mientras   
});

//REGISTRAR CASA
router.post('/reghouse', async (req, res) =>{
    const {w_search, type, province, population, room, bath, meters} = req.body;          
    const newHouse = new house({w_search, type, province, population, room, bath, meters}); //Crear un nuevo piso
    console.log(newHouse);                       //Guarda el piso
    await newHouse.save(); 
})



module.exports = router;