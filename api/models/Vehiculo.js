/**
 * Vehiculo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'sqlserver',

  attributes: {
    Tipo: {
      type: 'string',
      size: 45,
      notNull: true,
      required: true
    },

    Marca: {
      type: 'string',
      size: 45,
      notNull: true,
      required: true
    },

    Ano: {
      type: 'integer',
      notNull: true
    },

    Cilindro: {
      type: 'integer',
      unique: false
    },

      Nservicios: {
      type: 'integer'
    },

    Modelo: {
      type: 'string',
      size: 45,
      notNull: true,
      required: true
    },

    

    Placa: {
      type: 'string',
      size: 45,
      notNull: true,
      required: true
    },

     idcliente: {
      model: 'Cliente'
    },

    mantenimientos: {
      collection: 'Mantenimiento',
      via: 'idvehiculo'
    }
  } 
};

