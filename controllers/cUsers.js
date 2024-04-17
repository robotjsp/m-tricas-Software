const usersJSON= require('../models/mUsers');
const {request, response} = require('express');

//Team Dev = Registro de datos
const createUsers = async (req = request, res = response) => {
    console.log(req.body);
    const {nombres, apellidos, correo, nameusuario, contrasena, personjuridica, dni,descriptiontienda, createdate}= req.body;
    try {
        const name = (req.body.name) ? req.body.name.toString():'';
        const usersJSON_Query = await usersJSON.findOne({name});
        if(usersJSON_Query){
            return res.status(400).json({msg:'cUsers| ❎ Error durante la creación, dato duplicado'})
        }
        const data = {nombres, apellidos, correo, nameusuario, contrasena, personjuridica, dni,descriptiontienda, createdate}
        const JSON = new usersJSON(data);
        console.log(JSON);
        await JSON.save();
        //Crear respuesta positiva #201
        res.status(201).json(JSON);
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'cUsers| ❎ Error desconocido durante la creación:',e})
    }
}

//Team Dev= Funcion Leer usuarios
const getUsers = async (req = request, res = response) => {
    //Team QR=El uso de try/Catch disminuye el umbral de errores probables
    try {
        console.log(req.query);
        const status = req.query.status;
        const query = { status: status };
        const usersJSON_Query = await usersJSON.find(query);
        return res.json(usersJSON_Query);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: 'Control-Users| ❎ Error durante la lectura:',e });
    }
}

//postear la informacion
module.exports={createUsers, getUsers};