import { createEjercicio1 } from "./helpers/Ejercicio1.js";
import { crearEjercicio2 } from "./helpers/ejercicio2.js";

export default function createApp(){
    // ejercicio1
    const appDiv = document.getElementById("app");
    appDiv.appendChild(createEjercicio1());

    // ejercicio2
    crearEjercicio2()
}