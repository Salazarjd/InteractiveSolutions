const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');
const errorMiddleware= require("../middleware/errors")
const cookieParser= require("cookie-parser")


//app.use(cookieParser()); donde lo ubico?

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productsPath = '/api';

        //Conectar a la base de datos
        this.conectarDB();

        //middlewares para manejar errores
        this.middlewares();

        //Ruta para usuarios
        this.auth ();

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

        this.app.use (errorMiddleware)

      
    }

    auth(){

        this.app.use (this.auth, require("../routes/auth"));

        }

    routes(){

        this.app.use(this.productsPath, require('../routes/games'));
       
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;