const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/UsuarioController');

router.post(
    "/usuarios",
    usuarioController.createUsuario
);

router.get(
    "/usuarios",
    usuarioController.getUsuarios
);

router.post(
    "/login",
    usuarioController.loginUsuario
);

module.exports = router;
