export function createEj10(){
    function fetching(){
        const url = import.meta.env.VITE_URL;
        const port = import.meta.env.VITE_PORT;
        const urlCompleta = `${url}:${port}`
        return fetch(`${urlCompleta}/proyectos`)
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Solicitud errada")
                }
                return response.json();
            })
            .catch((error)=>console.error("Error:",error))
    }
    // DOM
    const container = document.createElement("div")
    container.classList.add("portfolio-container")

    // Filtros
    const filter = document.createElement("div")
    filter.classList.add("filter-buttons")


    container.appendChild(filter)

    return container;
}