const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');
const errorMiddleware= require("../middleware/errors")
const cookieParser= require("cookie-parser")



class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api';
        this.auth = '/api';

        //Conectar a la base de datos
        this.conectarDB();

        //middlewares para manejar errores
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
        this.app.use(cookieParser());

        //Cors
        this.app.use(cors());

        this.app.use (errorMiddleware)

      
    }

   
    routes(){

        this.app.use(this.productsPath, require('../routes/games'));
        this.app.use (this.auth, require("../routes/auth"));
       
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;