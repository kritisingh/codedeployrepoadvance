'use strict';

const Boom = require('boom');  
const uuid = require('node-uuid');  
const Joi = require('joi');

exports.register = function(server, options, next) {

  const db = server.app.db;

  //PLACEHOLDER
  //--------------------------------------------------------------
  //Here the routes definitions will be inserted in the next steps...

  return next();
};

exports.register.attributes = {  
  name: 'routes-books'
};
