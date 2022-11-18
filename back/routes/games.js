const { Router } = require('express');
const { getGames, getGame, postGame, putGame, deleteGame, getAdmingames } = require('../controllers/games');
const { isAuthenticatedUser,authorizeRoles, } = require('../middleware/auth');

const router = Router();


//Probemos autenticación
router.get('/games',getGames);

router.get('/game/:id', getGame);

//Rutas Admin
router.post('/game/new',isAuthenticatedUser, authorizeRoles("admin"),postGame);

router.put('/game/:id',isAuthenticatedUser,authorizeRoles("admin"), putGame);

router.delete('/game/:id', isAuthenticatedUser,authorizeRoles("admin"),deleteGame);

router.route('/admin/games').get(isAuthenticatedUser, authorizeRoles("admin"), getAdmingames); //establecemos la ruta


module.exports = router;