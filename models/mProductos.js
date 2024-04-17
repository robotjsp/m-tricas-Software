const {Schema, model} = require("mongoose");

const productoSchema = Schema({
  nombreProductos: {
    type: String,
    min: 2,
    required: true
  },
  descripciones: {
    type: String,
    min: 2,
    required: true
  },
  categorias: {
    type: String,
    required: true
  },
  marcas: {
    type: String,
    required: true
  },
  inventarios: {
    type: String,
    min: 8
  },
  precios: {
    type: Number,
    default: false
  },
  url: {
    type: String
  }

});

module.exports = model('mProductos', productoSchema);

  // Campos adicionales para creadores
 // productos: [{
   // type: mongoose.Schema.Types.ObjectId,
    //ref: 'Producto'
  //}],
  // Campos adicionales para compradores
  //compras: [{
    //type: mongoose.Schema.Types.ObjectId,
    //ref: 'Compra'
  //}],
//});

//const User = mongoose.model('User', userSchema);