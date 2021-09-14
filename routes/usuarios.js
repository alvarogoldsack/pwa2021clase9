const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios');

const get = (req, res) => {
    model.getAll().then((response) => res.status(200).json(response)).catch((err) => res.status(500).json(err))
}

const create = (req, res) => {
    model.create(req.body).then((response) => res.status(200).json(response)).catch((err) => res.status(500).json(err))
}

router.get('/',get);
router.post('/create',create);
module.exports = router;