const productosJSON= require('../models/mProductos');
const {request, response} = require('express');

const createProductos = async (req = request, res = response) =>{
    console.log(req.body)
    const {nombreProductos, descripciones, categorias, marcas, inventarios, precios, url}=req.body;
    try {
        const name = (req.body.name) ? req.body.name.toString():'';
        const productosJSON_Query=await productosJSON.findOne({name});
        if (productosJSON_Query) {
            return res.status(400).json({msg:'cProductos| ❎ Error durante la creación, dato duplicado'})
        }
        const data = {nombreProductos, descripciones, categorias, marcas, inventarios, precios, url}
        const JSON = new productosJSON(data);
        console.log(JSON);
        await JSON.save();
        res.status(201).json(JSON);
    } catch (e) {
        console.log(e);
        return res.status(500).json({msg:'cProductos| ❎ Error desconocido durante la creación:',e});
    }
}

//Team Dev= Funcion Leer Productos
const getProductos = async (req = request, res = response) => {
    //Team QR=El uso de try/Catch disminuye el umbral de errores probables
    try {
        console.log(req.query);
        const status = req.query.status;
        const query = { status: status };
        const productosJSON_Query = await productosJSON.find(query);
        return res.json(productosJSON_Query);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: 'cProductos| ❎ Error durante la lectura:',e });
    }
}

module.exports={createProductos, getProductos};