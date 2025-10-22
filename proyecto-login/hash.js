// Pruebas hash
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('admin', salt);
console.log(hash);
const ok = bcrypt.compareSync("admin",hash);
console.log(ok);
