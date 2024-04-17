const {Router}=require('express');

const{
    createUsers, 
    getUsers
} = require('../controllers/cUsers');

const router = Router();
router.post('/',createUsers);
router.get('/',getUsers);

module.exports=router;
