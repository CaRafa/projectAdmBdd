/**
 * ServicioController
 *
 * @description :: Server-side logic for managing servicios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	mostrar: function(req,res,next){

				Servicio.query('Select Servicio.Nombre, Servicio.Costo, b.Estado, b.id as idMs, Servicio.id as idServ, b.idMant as idMant from Servicio inner join'+
				' Ms b on Servicio.id = b.idServicio inner join'+
				' Mantenimiento c on b.idMant = c.id where c.id='+req.param('id')+';' , function(err, results) {
             		
             		if (err) return res.serverError(err);
             		var string=JSON.stringify(results);
             		var json =  JSON.parse(string);
             		console.log(json);

            		 res.view({Servicios: json});
             } );


	},

      mostrarcliente: function(req,res,next){

                        Servicio.query('Select Servicio.Nombre, Servicio.Costo, b.Estado from Servicio inner join'+
                        ' Ms b on Servicio.id = b.idServicio inner join'+
                        ' Mantenimiento c on b.idMant = c.id where c.id='+req.param('id')+';' , function(err, results) {
                        
                        if (err) return res.serverError(err);

                        var string=JSON.stringify(results);
                        var json =  JSON.parse(string);
                        console.log(json);

                         res.view({Servicios: json});
             } );


      },

      actualizar: function(req, res,next){

        Ms.update(req.param('id'), req.params.all() , function Msactualizada (err) {
        if(err) {return res.serverError(err);}
        res.redirect('/Servicio/mostrar/'+req.param('idMant'));

     });
    }


	
};

