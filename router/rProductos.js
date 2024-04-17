const {Router}=require('express');

const{
    createProductos, 
    getProductos
} = require('../controllers/cProductos');

const router = Router();
router.post('/',createProductos);
router.get('/',getProductos);

module.exports=router;
