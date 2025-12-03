import { createEj1 } from "./ejercicios/ejercicio1";
import { createEj2 } from "./ejercicios/ejercicio2";

export function createApp(){
    const appDiv = document.getElementById("app");
    //ejercicio1
    //appDiv.appendChild(createEj1());

    //ejercicio2
    appDiv.appendChild(createEj2());
}