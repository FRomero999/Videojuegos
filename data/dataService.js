const path = require('path');
const fs = require('fs');

const productosTienda = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'productos.json'), 'utf8')
);

function saveProductosTienda() {
    fs.writeFileSync(
        path.join(__dirname, 'productos.json'),
        JSON.stringify(productosTienda),
        'utf8'
    );
}

function findAllProductos() {
    return productosTienda;
}

function findAllProductosLessThan(precio) {
    return productosTienda.filter((e) => { return (e.precio < precio) })
}

function findProductoById(id) {   
    return productosTienda.filter((e) => { return (e.id == id) })[0]
}



module.exports = {
    findAllProductos,
    findAllProductosLessThan,
    findProductoById
}