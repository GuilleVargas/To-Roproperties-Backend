/**
 * !Para estructurar una aplicación cuando va creciendo
 * TODO: Guardan/ definen los métodos, y luego esos métodos se reutilizan en las rutas
 */

 const HouseCtrl = { }; //Defino un objeto

 /**
  * Vamos a agregarle múltiples métodos al objeto
  * ? Obtener Casas(get)
  * ?Agregar Casas(create)
  */

HouseCtrl.getHouses= (req, res) => {
    res.json({
      status: 'Houses goes here'       //me lo devuelve como un objeto de JS
    });
}

HouseCtrl.createHouses= function(){}



 module.exports = HouseCtrl;