import { DB } from './db/db.js';
import { initialStorage } from './helpers/storage.js';
import { renderloginform } from './views/loginView.js';
import { validarCredenciales } from './sevices/autoServices.js'

export function initialApp(){
    // iniciamos guardando los usuarios en localStorage
    initialStorage(DB)

    // Pintamos/renderizamos mi formulario en app
    const app = document.getElementById('app');
    console.log(app);
    app.innerHTML = renderloginform();
    const form = document.querySelector("#loginForm");
    const message = document.querySelector("#message");

    // pongo un escuchador de eventos al formulario
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        //comporbar si username y password son correctos.
        const {username,password}= Object.entries(new FormData(form));
        //crear función que valide que username y passord son correctos usando las siguientes restricciones.
        // - no vacias.
        // - password > 8 caracteres.
        // - username y password están en el localStorage
        const ok= validarCredenciales(username, password);


        message.innerHTML=ok
            ? `<span style="green">Bienvenido ${username}</span>`
            : `<span style="red">Credenciales erroneas</span>`;
        form.reset();

    });


}

// Terminar el login mostrando en verde login correcto y rojo incorrecto.
// Debajo añadir otro formulario llamado register que permita registrarse
// con un usuario y un password hasheado y almacenarlo en le localstorage.