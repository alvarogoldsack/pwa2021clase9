const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios');

const login = (req, res) => {
     model.login(req.body).then((response) => res.status(200).json(response)).catch((err) => res.status(500).json(err));
}

router.get('/',login);
module.exports = router;

