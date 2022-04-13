// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.BIGINT(20),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    }
    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models) {
        Categoria.hasMany(models.Producto, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "Productos", // El nombre del modelo pero en plural
            foreignKey: "id_categoria"
        })
    }

    return Categoria
};