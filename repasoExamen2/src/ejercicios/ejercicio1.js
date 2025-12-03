import { bienvenida } from "../data/data";

export function createEj1(){
    const url = import.meta.env.VITE_URL;
    const port = import.meta.env.VITE_PORT;
    const urlPort = `${url}:${port}`;

    function fetching(){
        return fetch(`${urlPort}/bienvenida`)
            .then(res=>{
                if(!res.ok){
                    throw new Error("Error en la petición");
                }
                return res.json();
            }).then(data=>data.texto)
            .catch(error=>console.error("Error:",error));
    }
    

    const container = document.createElement("div");
    const message = document.createElement("p");

    fetching().then(texto => {
        message.textContent = texto;
    });
    message.classList.add("welcome-message");
    
    container.appendChild(message);
    return container;
}