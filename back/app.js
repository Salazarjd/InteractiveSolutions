require('dotenv').config();
const Server = require('./models/server');
const cloudinary = require('cloudinary');

const server = new Server();

//Configurar cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APY_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

server.listen();