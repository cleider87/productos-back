var expect = require('chai').expect;

var Producto = require('../models/productoModel');

describe('Modelo Produto', function() {
    it('Validar si el nombre está vacio', function(done) {
        var product = new Producto();
        product.validate(function(err) {
            expect(err.errors.nombre).to.exist;
            done();
        });
    });
    it('Validar si la marca está vacia', function(done) {
        var product = new Producto();
        product.validate(function(err) {
            expect(err.errors.marca).to.exist;
            done();
        });
    });
    it('Validar si el modelo está vacio', function(done) {
        var product = new Producto();
        product.validate(function(err) {
            expect(err.errors.modelo).to.exist;
            done();
        });
    });
});
