const path = require('path');
const db = require('../../database/models');
const Producto = require('../../database/models/Producto');

//const { Op } = require("sequelize");
//const moment = require('moment');


const productosApiController ={


    list: async (req, res) =>{
        try {
            const productos= await db.Producto.findAll(); 
            const response={
                meta: {
                    status: 200,
                    total: productos.length,
                    url: '/productos'
                },
                data: productos
            }
            return res.json(response);
        } catch (error) {
            return res.json({ error})
        }
    },
    detail: async(req,res) => {
        try {
            const producto= await db.Producto.findByPk(req.params.id); 
            const response={
                meta: {
                    status: 200,
                    total: producto.length,
                    url: '/productos'
                },
                data: producto
            }
            return res.json(response);
        } catch (error) {
            return res.json({ error})
        }
    },
    create:async (req, res) => {
        await db.Producto.create({
            nombre:req.body.nombre,
            precio:req.body.precio,
            imagen: 'no tiene',
            cantidad: req.body.cantidad,
            descripcion: req.body.descripcion,
            id_provedor: req.body.idProvedor,
            id_categoria: req.body.idCategoria
        })  
    }
}

module.exports = productosApiController;