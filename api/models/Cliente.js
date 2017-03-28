/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'sqlserver',

  attributes: {
    Nombre: {
      type: 'string',
      size: 45,
      notNull: true,
      required: true
    },
    Cedula: {
      type: 'integer',
    },
    Telefono: {
      type: 'integer',
      unique: false
    },
     vehiculos: {
      collection:'Vehiculo',
      via: 'idcliente'
    },
    facturas: {
      collection: 'Factura',
      via: 'idcliente'
    },
   
    Correo: {
      type: 'email',
      email: true,
      notNull: true
    }
  } 
};
