// Importacion
import { ENV } from '../config/env.js';

// Crear función initialStorage() que reciba un array de usuarios y 
// los guarde en el localStorage
/**
 * 
 * @param {*} arrayUsers 
 */
export function initialStorage(arrayUsers){
    localStorage.setItem(ENV.VITE_STORAGE_KEY, JSON.stringify(arrayUsers));
    console.info(`${ENV.VITE_APP_TITLE}: usuarios guardados correctamente:`)
}

// Crear una función llamada getUsuarios() que se traiga todos los
// usuarios
/**
 * 
 * @returns Los usuarios guardados en el localStorage
 */
export const getUsers = () => {
    return JSON.parse(localStorage.getItem(ENV.VITE_STORAGE_KEY)) || [];
}

//craear una función llamada setUsuario(usuario) y lo guarde en el
// localStorage en la key del .env
export const setUsers =(user)=>{
    const users = getUsers();
    users.push(user);
    initialStorage(users);
    // initialStorage([...users, user]);
}