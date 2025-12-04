import { createEj1 } from "./ejercicios/ejercicio1";
import { createEj10 } from "./ejercicios/ejercicio10";
import { createEj2 } from "./ejercicios/ejercicio2";
import { createEj3 } from "./ejercicios/ejercicio3";
import { createEj4 } from "./ejercicios/ejercicio4";
import { createEj5 } from "./ejercicios/ejercicio5";

export function createApp(){
    const appDiv = document.getElementById("app");
    //ejercicio1
    //appDiv.appendChild(createEj1());

    //ejercicio2
    //appDiv.appendChild(createEj2());

    //ejercicio3
    //appDiv.appendChild(createEj3());

    //ejericio4
    //appDiv.appendChild(createEj4());

    //ejericio5
    //appDiv.appendChild(createEj5());

    //ejercio10
    appDiv.appendChild(createEj10());
}