/**
 * Factura.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  connection: 'sqlserver',

  attributes: {

    Cneto: {
      type: 'integer',
      notNull: true
    },

    Ctotal: {
      type: 'integer',
    },

    Cancelado: {
      type: 'boolean',
      notNull: true
    },

    Fpago: {
      type: 'date'
    },

      idMant: {
      type: 'integer',
      required: true
    },

    idcliente: {
      model: 'Cliente'
    }
  } 
};
