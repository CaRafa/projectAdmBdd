/**
 * Ms.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {

  	idMant: {
      type: 'integer',
      notNull: true
    },

    Estado: {
      type: 'boolean'
    },

    idServicio: {
      type: 'integer',
      notNull: true
    }

  }
};

