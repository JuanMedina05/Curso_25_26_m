import { bienvenida } from "../db/data";

// importar variables .env
const PORT=import.meta.env.VITE_PORT||"1212";
const URL=import.meta.env.VITE_URL||"http://localhost";
const URL_PORT=`${URL}:${PORT}`

export function createEjercicio1(){
    // fetch
    function createEjercicio1Fetch(){
        return fetch(`${URL_PORT}/bienvenida`)
                .then((response) => response.json())
                .then((data)=>{return data.texto})
                .catch((error)=>{console.error("Error al obtener los datos del JSON:", error);});
    }

    // sin fetch
    function createEjercicio1SinFetch(){
        const welcomeMessage = document.createElement("p");
        welcomeMessage.textContent=bienvenida.texto;
        return welcomeMessage;
    }
    const container = document.createElement("div");
    const parrafo = document.createElement("p");
    parrafo.classList.add("welcome-message");
    createEjercicio1Fetch().then((data)=>parrafo.textContent=data);

    container.appendChild(parrafo);
    return container;
}