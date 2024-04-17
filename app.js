const express = require('express');
const app = express();

//Middlewares (Capa intermedia) Se ejecuta antes
app.use(express.json());
app.use(express.urlencoded({extended: false}));
var cors = require('cors');
app.use(cors());

//Importar las rutas
const RutaUsuarios = require('./router/rUsers');
const RutaProductos = require('./router/rProductos');

// todo: Middlewares cors
app.use('/api/users',RutaUsuarios);
app.use('/api/productos',RutaProductos);

app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
    }
);

//Este metodo solocitara el endpoint
app.get('/', (req,res) => {
    return res.json({});
    }
);

//Luego exportamos todo
module.exports=app;