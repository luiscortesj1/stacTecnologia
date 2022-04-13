const express= require('express');
const router= express.Router();
const moviesAPIController = require('../../controllers/api/productosAPIController');


router.get('/',moviesAPIController.list);
router.get('/:id',moviesAPIController.detail);
router.post('/create',moviesAPIController.create);

module.exports=router;