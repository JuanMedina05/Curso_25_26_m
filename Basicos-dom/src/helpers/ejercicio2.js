

const PORT=import.meta.env.VITE_PORT||"1212";
const URL=import.meta.env.VITE_URL||"http://localhost";
const URL_PORT=`${URL}:${PORT}`

export function crearEjercicio2(){
    console.log("lomoprueba")
    const tasks = fetch(`${URL_PORT}/tareas`)
        .then((res) => res.json())
        .then((data)=>{return data})
        .catch((error)=>{console.error("Error al obtener los datos del JSON:", error);});

    console.log(tasks.then((data)=>data))
}