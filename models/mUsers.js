const {Schema, model} = require("mongoose");

const userSchema = Schema({
  nombres: {
    type: String,
    min: 2,
    required: true
  },
  apellidos: {
    type: String,
    min: 2,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  nameusuario: {
    type: String,
    min: 2,
    required: true
  },
  contrasena: {
    type: String,
    min: 8
  },
  personjuridica: {
    type: Boolean,
    default: false
  },
  dni: {
    type: String
  },
  descriptiontienda: {
    type: String
  },
  createdate: {
    type: Date,
    default: Date()
}

});

module.exports = model('mUsers', userSchema);