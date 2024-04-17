const app = require('./app');
const {mongodbconnect} = require('./db/dbDriver');

//Creamos una instancia del modulo dotenv
const dotenv = require('dotenv').config();

//Realizamos set o asignacion de puerto con una clave'port' y un puerto alternativo como parametro
app.set('port',process.env.PORT || 4000);


//Creamos un objeto que traiga la conexion a la bd
const conexion = mongodbconnect();

//Definimos devolución de llamada y llamamos como parametro el objeto
app.listen(app.get('port'), ()=>{
console.log(`Server| 🆗 Conexion Exitosa: ℹ️ Internet port # ${app.get('port')}`);
});