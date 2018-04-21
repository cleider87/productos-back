'use strict';
var mongoose = require('mongoose'),
  Producto = mongoose.model('Productos');

exports.list = function(req, res) {
  Producto.find({}, function(err, productos) {
    if (err)
      res.send(err);
    res.json(productos);
  });
};

exports.create = function(req, res) {
  var _producto = new Producto(req.body);
  _producto.save(function(err, producto) {
    if (err)
      res.send(err);
    res.json(producto);
  });
};

exports.delete = function(req, res) {
  Producto.remove({
    _id: req.params.proId
  }, function(err, producto) {
    if (err)
      res.send(err);
    res.json({ message: 'Producto eliminado!' });
  });
};
