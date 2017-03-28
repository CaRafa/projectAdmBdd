/**
 * Admin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	 Correo: {
      type: 'email',
      email: true,
      notNull: true
    },
    Clave: {
      type: 'string',
      size:20,
      required: true
    }
  }
};

