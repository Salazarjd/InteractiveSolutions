const { Router } = require('express');
const { getGames, getGame, postGame, putGame, deleteGame } = require('../controllers/games');

const router = Router();

router.get('/games', getGames);

router.get('/game/:id', getGame);

router.post('/game/new', postGame);

router.put('/game/:id', putGame);

router.delete('/game/:id', deleteGame);

module.exports = router;