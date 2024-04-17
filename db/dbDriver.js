const mongoose = require('mongoose');

const mongodbconnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{});
        console.log('dbDriver| ✅ Base de Datos en linea ⚙️...')
    }catch(e){
        console.log('dbDriver| ❎ Error: Falló la conexion debido a: ', e);
        //Crear un nuevo error
        throw new Error('dbDriver : ❎ Error de conexion');
    }
};

module.exports={mongodbconnect};