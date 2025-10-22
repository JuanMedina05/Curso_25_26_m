import { getUsers } from "../helpers/storage";
//import { bcrypt } from "bcryptjs";
const bcrypt = require('bcryptjs');


export default function validarCredenciales(username, password){
    // existe username y password
    // password longitu>8
    // existe user y password en localstorage
    // nota: siempre trimear la data de los formularios.

    if(!username.trim()||!password.trim()||password.length<8){
        return false;
    }

    const users = getUsers();
    const user = users.fing((user)=>user.username===username)

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const ok = bcrypt.compareSync(user.passwordhash,hash);

    return ok;
}