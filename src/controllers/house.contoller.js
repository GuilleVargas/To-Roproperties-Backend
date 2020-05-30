/**
 * !Para estructurar una aplicación cuando va creciendo
 * TODO: Guardan/ definen los métodos, y luego esos métodos se reutilizan en las rutas
 */

 const Houses = require('../models/Houses');      //Requiero el modelo de datos de Houses
 const HouseCtrl = { }; //Defino un objeto

 /**
  * Vamos a agregarle múltiples métodos al objeto
  * ? Obtener Casas(get)
  * ? Obtener una Casa(get)
  * ?Agregar Casas(create)
  */

HouseCtrl.getHouses = async (req, res) => {    //Este va a obtener todas las casas
    const houses = await Houses.find();    // await es cuando va a tomar tiempo, pero cuando termine lo guarda en la constante
    res.json(houses);
};

HouseCtrl.getHouse = async (req,res) =>{         // Esta va a ser para obtener una sola casa
    const houseid = await Houses.findById(req.params.id);
    res.json(houseid);
} ;

HouseCtrl.createHouses = async (req, res) =>{  // Crear/Guardar casas
    const housesave = new Houses(req.body);
    await housesave.save();
    res.json({
        'status': 'Hoses Saved'
    });
};

HouseCtrl.editHouse = async (req,res) => {        // Actualizar casas
};

HouseCtrl.deleteHouse = function(){

};



 module.exports = HouseCtrl;