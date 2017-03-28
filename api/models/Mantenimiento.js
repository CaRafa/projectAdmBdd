/**
 * Mantenimiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'sqlserver',

  attributes: {
    Fentrega: {
      type: 'date'
    },

    Fingreso: {
      type: 'date'
    },

    Fsalida: {
      type: 'date'
    },

    Estado: {
      type: 'boolean'
    },
    idvehiculo: {
      model: 'Vehiculo'
    }
  } 
};
