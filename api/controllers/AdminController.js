/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	inicio : function(req,res,next){

		res.view();

	},
	
	perfil : function(req,res,next){

		res.view();

	},




	login : function(req,res,next){

		Admin.findOne({Correo:req.param('correo')}).exec(function(err,resultado){
    		

    		if(resultado !== undefined ){
    			
    			console.log(req.param('clave'));
    			console.log(resultado.Clave);
    			
    			if(resultado.Clave === req.param('clave')){
    				res.redirect('/Admin/perfil/'+resultado.id);
                }    

    			else{return res.notFound('Clave invalida');}

    		}

            if(resultado === undefined){ res.notFound('No existe el usuario');}

    			});
    		

	},

     cliente: function(req,res,next){
    
        Cliente.findOne({Cedula: req.param('ced')}).exec(function(err,resultado){
    
         if (err) {return res.serverError(err);}

         if(resultado !== undefined) {
             
             Vehiculo.find({idcliente: resultado.id }).exec(function(err,veh){
                    
                    if (err) {return res.serverError(err);}

                    res.view({veh:veh, id:resultado.id});
                    });

             
         }
         if(resultado === undefined){return res.notFound('Ese cliente no existe');}

            });  
    },

    mantenimientos: function(req,res,next){
    
        Mantenimiento.find({idvehiculo: req.param('id')}).exec(function(err,resultado){
            
            res.view({mant:resultado, idveh:req.param('id')});
         });

    },


    nuevomantenimiento: function(req,res,next){

        Mantenimiento.create(req.params.all(), function servicio (err, idmant) {
                if(err)  {return next(err);}  

                Servicio.find().exec(function(err,resultado){
                    console.log(resultado);

                    res.view({mant:resultado, idveh:idmant.id});
                 });
    
         });

    
        

    },

    Agregarserv: function(req,res,next){
    
         Ms.create(req.params.all(), function servicio (err, servicio) {
                if(err)  {return next(err);}  
            
            

      });
    },

    estadistica: function(req,res,next){



                                    Admin.query('Select Vehiculo.Modelo as modelo, count(Mantenimiento.id) as numero from Vehiculo '+
                                    'inner join Mantenimiento on Mantenimiento.idvehiculo = Vehiculo.id '+
                                    'Group by Vehiculo.Modelo order by numero desc;' , function(err, nombre) {

                                        if (err) return res.serverError(err);

                                       
                                        var string = JSON.stringify(nombre);
                                        var aux =  JSON.parse(string);
                                        
                                                 Admin.query('Select Servicio.Nombre as nombre, count(ms.idServicio) as numero from Servicio '+
                                                             'inner join ms on ms.idServicio = Servicio.id '+
                                                             'Group by Servicio.Nombre order by numero desc;' , function(err, serv) {

                                                                 if (err) return res.serverError(err);

                                                                    var string2 = JSON.stringify(serv);
                                                                    var aux2 =  JSON.parse(string2);

                                                                    res.view({ Nombre: aux, Servicio:aux2 });
                                                                   }); 

                                        
                                    });

    
    },





};

