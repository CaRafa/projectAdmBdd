/**
 * FacturaController
 *
 * @description :: Server-side logic for managing facturas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	generar: function(req,res,next){

				Servicio.query('Select SUM(Servicio.Costo) as costoneto from Servicio inner join'+
				' Ms b on Servicio.id = b.idServicio inner join'+
				' Mantenimiento c on b.idMant = c.id '+
				'where (c.id='+req.param('id')+' AND b.Estado = 1 );' , function(err, results) {

             		if (err) return res.serverError(err);

             		var string=JSON.stringify(results);
             		var json =  JSON.parse(string);
             		console.log(json);
            		
             		Servicio.query('Select  Servicio.Nombre, Servicio.Costo from Servicio inner join'+
					' Ms b on Servicio.id = b.idServicio inner join'+
					' Mantenimiento c on b.idMant = c.id  where (c.id='+req.param('id')+' AND b.Estado = 1 );' , function(err, serv) {

					var string2=JSON.stringify(serv);
             		var json2 =  JSON.parse(string2);
             		console.log(json2);


             						Servicio.query('Select Cliente.Nombre, Cliente.id from Cliente '+
             						'inner join Vehiculo b on Cliente.id = b.idcliente '+
             						'inner join Mantenimiento c on b.id = c.idvehiculo '+	
									'inner join Ms d on c.id = d.idMant '+
									'inner join Servicio e on d.idServicio = e.id '+
									'where (c.id='+req.param('id')+' AND d.Estado = 1 ) Group by Cliente.Nombre, Cliente.id;' , function(err, nombre) {

										var string3=JSON.stringify(nombre);
             							var aux =  JSON.parse(string3);
             							console.log(aux);


										res.view({CostoNeto: json, serv: json2, Nombre: aux, idMant:req.param('id') });
									});


            		

            	   } );



             } );


	},
	 create: function(req,res,next){

    	Factura.create(req.params.all(), function factcreada (err, fact) {
        if(err) 
        {
            return next(err);}  
 			



 			Mantenimiento.findOne({id: req.param('idMant')}).exec(function(err,mantenimiento){
    
         					if (err) {return res.serverError(err);}
         					var update = mantenimiento;
         					update.Estado = true;

         						Mantenimiento.update(update.id, update , function Manteactualizada (err) {
       							 if(err) {return res.serverError(err);}
       							 res.redirect('/Admin/perfil');

    							 });
         					

	         					
            });  


      });


    },




};

