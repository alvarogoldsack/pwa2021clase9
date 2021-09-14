const bd = require('../utils/bd');

const getAll = () => bd('usuarios').select();

const create = (obj) => bd('usuarios').insert(obj);

const login = (obj) => bd('usuarios').where({'username' : obj.username,'pass': obj.pass}).select('username', 'pass');

module.exports = {getAll, create, login}