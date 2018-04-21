'use strict';
module.exports = function(app) {
  var productos = require('../controllers/productosController');
  app.route('/api/products').get(productos.list)
  app.route('/api/products').post(productos.create);
  app.route('/api/products/:proId').delete(productos.delete);
};
