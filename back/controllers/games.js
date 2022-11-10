const { response } = require('express');
const Game = require('../models/games');

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

const postGame = async(req, res = response ) => {
    req.body.user = req.user.id;
    
    const game = new Game(req.body);
        
    await game.save();

    res.status(201).json({
        success: true,
        game
    });
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

module.exports = {
    getGames,
    getGame,
    postGame,
    putGame,
    deleteGame
}