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

    fetching().then((d)=>{console.log(d)})
    
    const container = document.createElement("div");
    return container;
}