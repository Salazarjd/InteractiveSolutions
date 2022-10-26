const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api/products';

        //Conectar a la base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        //rutas de la aplicación
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //Directorio publico
        this.app.use(express.static('public'));

        //Lectura y parseo del body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    routes(){

        this.app.use(this.productsPath, require('../routes/products'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;