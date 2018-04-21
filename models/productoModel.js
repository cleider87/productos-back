'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: 'Nombre del producto'
  },
  marca: {
    type: String,
    required: 'Marca del Producto'
  },
  modelo: {
    type: String,
    required: 'Marca del Producto'
  },
  fecha_creacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Productos', ProductoSchema);
