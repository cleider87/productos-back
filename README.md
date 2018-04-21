# Productos Backend
[![Build Status](https://travis-ci.org/cleider87/productos-back.svg?branch=master)](https://travis-ci.org/cleider87/productos-back)
## Instalación

npm install


## Guardar Producto
```javascript
POST /api/products
```
Body Request
```javascript
{
	"nombre": "Samsung S8 Negro",
	"marca": "Samsung",
	"modelo": "GMTSK60"
}
```
## Listar Productos
```javascript
GET /api/products
```
## Eliminar Producto
```javascript
DELETE /api/products/{id}
```
