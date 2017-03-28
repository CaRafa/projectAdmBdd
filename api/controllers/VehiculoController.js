/**
 * VehiculoController
 *
 * @description :: Server-side logic for managing vehiculoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	nuevocarro: function(req,res,next){
    
    
    var id = req.param('id');

    res.view({Cliente:id});
        
    
    },

    create: function(req,res,next){

    	console.log(req.params.all());

    Vehiculo.create(req.params.all(), function Usuariocreado (err, veh) {
        if(err) 
        {
            return next(err);}  
 			
 			console.log(veh);

 			res.redirect ('/Admin/perfil');


      });
    },

    misveh: function(req,res,next){
    
        console.log(req.param('ced'));
        Cliente.findOne({Cedula: req.param('ced')}).exec(function(err,resultado){
    
         if (err) {return res.serverError(err);}

         if(resultado !== undefined) {
             
             console.log(resultado.id);





             Vehiculo.find({idcliente: resultado.id }).exec(function(err,veh){
                    
                    if (err) {return res.serverError(err);}

                    console.log(veh);
                    res.view({veh:veh});
                    });

             





             
         }
         if(resultado === undefined){return res.notFound('Ese cliente no existe');}

            });  
    },



};

