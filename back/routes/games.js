const { Router } = require('express');
const { getGames, getGame, postGame, putGame, deleteGame } = require('../controllers/games');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

const router = Router();


//Probemos autenticación
router.get('/games',getGames);

router.get('/game/:id', getGame);

router.post('/game/new',isAuthenticatedUser, authorizeRoles("admin"),postGame);

router.put('/game/:id',isAuthenticatedUser,authorizeRoles("admin"), putGame);

router.delete('/game/:id', isAuthenticatedUser,authorizeRoles("admin"),deleteGame);

module.exports = router;