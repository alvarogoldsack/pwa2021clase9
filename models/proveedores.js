const bd = require('../utils/bd');

const getAll = () => bd('proveedores').select();

const create = (obj) => bd('proveedores').insert(obj);

const single = (id) => bd('proveedores').where({'id': id, 'eliminado': false}).select('nombre','mail','pass','id');

const update = (id, obj) => bd('proveedores').where({'id': id}).update(obj);

module.exports = {getAll, create, single, update}