module.exports =(sequelize,dataTypes)=>{
    const alias= 'Producto';
    const cols={
        id_producto:{
            type: dataTypes.BIGINT(20),
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        precio:{
            type: dataTypes.BIGINT(20),
            allowNull: false
        },
        imagen:{
            type:dataTypes.STRING(255),
            allowNull: true
        },
        cantidad:{
            type: dataTypes.BIGINT(20),
            allowNull: false
        },
        descripcion:{
            type: dataTypes.STRING(500),
        },
        id_proveedor:{
            type: dataTypes.BIGINT(20),
            allowNull: false
        },
        id_categoria:{
            type: dataTypes.BIGINT(20),
            allowNull: false
        }
        
    }; 
    const config={
        tableName: 'productos',
        timestamps: false
        
    }
    const Producto=sequelize.define(alias,cols,config);
    
    Producto.associate=function(models){
        Producto.belongsTo(models.Categoria,{
            as:'categorias',
            foreignKey:'id_categoria'
        })

       
    }

    
    return Producto;
};