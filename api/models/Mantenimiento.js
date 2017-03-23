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
      type: 'date',
      notNull: true,
      required: true
    },

    Fingreso: {
      type: 'date',
      notNull: true,
      required: true
    },

    Fsalida: {
      type: 'date',
      required: true
    },

    Estado: {
      type: 'boolean',
      notNull: true
    },
    idvehiculo: {
      model: 'Vehiculo'
    }
  } 
};
