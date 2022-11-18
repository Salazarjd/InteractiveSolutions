const { response } = require('express');
const Game = require('../models/games');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary=require("cloudinary")




const getGames = async(req, res = response ) => {

    const games = await Game.find();
    if (!games) {
        return res.status(404).json({
            success: false,
            error: true
        })
    }

    res.status(200).json({
        success: true,
        count: games.length,
        games
    });
}

const getGame = async(req, res = response ) => {

    const game = await Game.findById(req.params.id);
    if (!game) {
        return res.status(404).json({
            success: false,
            message: `Producto con id ${req.params.id} no existe`,
            error:true
        })
    }   

    res.status(200).json({
        success: true,
        message:"Aqui encuentras información del producto",
        game
    })
}

//Crear nuevo producto /api/productos

const postGame = async(req, res = response ) => {
    let imagen=[]

    if(typeof req.body.imagen==="string"){
        imagen.push(req.body.imagen)
    }else{
        imagen=req.body.imagen
    }

    let imagenLink=[]

    for (let i=0; i<imagen.length;i++){
        const result = await cloudinary.v2.uploader.upload(imagen[i],{
            folder:"products"
        })
        imagenLink.push({
            public_id:result.public_id,
            url: result.secure_url
        })
    }
    req.body.imagen=imagenLink
    req.body.user = req.user.id;
    
    const game = new Game(req.body);
        
    await game.save();	

    res.status(201).json({
        success: true,
        game
    })
}

const putGame = async(req, res = response ) => {

    let game = await Game.findById(req.params.id);
    if (!game) {
        return res.status(404).json({
            success: false,
            message: `Producto con id ${req.params.id} no existe`
        });
    }

    game = await Game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    
    res.status(200).json({
        success: true,
        message: 'Producto actualizado correctamente',
        game
    });
}

const deleteGame = async(req, res = response ) => {

    const game = await Game.findById(req.params.id);
    if (!game) {
        return res.status(404).json({
            success: false,
            message: `Producto con id ${req.params.id} no existe`
        });
    }

    await game.remove();
    
    res.status(200).json({
        success: true,
        message: 'Producto eliminado correctamente',
    });
}

//Ver la lista de productos (Admin)

 const getAdmingames = catchAsyncErrors(async (req, res, next) => {

    const game = await Game.find()

    res.status(200).json({
        game
    })

})




module.exports = {
    getGames,
    getGame,
    postGame,
    putGame,
    deleteGame,
    getAdmingames,
}