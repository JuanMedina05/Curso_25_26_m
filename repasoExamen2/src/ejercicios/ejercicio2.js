export function createEj2(){
    function fetching(){
        const url = import.meta.env.VITE_URL;
        const port = import.meta.env.VITE_PORT;
        const urlPort = `${url}:${port}`;
        return fetch(`${urlPort}/tareas`)
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Error en la solicitud")
                }
                return res.json();
            })
            .then(data=>data)
            .catch((error)=>console.error("Error:",error));
    }
    
    const container = document.createElement("div");
    
    // h2
    const encabezado = document.createElement("h2")
    encabezado.textContent="Mi Lista de Tareas"
    container.appendChild(encabezado)
    
    // list
    const list = document.createElement("ul");


    fetching().then((tasks)=>{
        tasks.forEach((task)=>{
            const item = document.createElement("li");
            item.textContent=task.texto;
            item.classList.add("task-item");
            const completada = task.completada ? "[x]":"[]";
            
            
            if(task.completada){
                item.classList.add("completed");
            }
            item.textContent=`${completada} ${task.texto}`
            list.appendChild(item);
        })
        
    })

    container.appendChild(list)




    return container;
}