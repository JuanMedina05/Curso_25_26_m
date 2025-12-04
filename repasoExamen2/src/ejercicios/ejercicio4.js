export function createEj4(){
    const url = import.meta.env.VITE_URL;
    const port = import.meta.env.VITE_PORT;
    const urlPort = `${url}:${port}`;

    function fetching(){
        return fetch(`${urlPort}/alojamientos`)
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Solicitud errada");
                }
                return res.json();
            })
            .then((data)=>data)
            .catch((error)=>console.error("Error",error))
    }

    //DOM
    const container = document.createElement("div");
    container.classList.add("table-container")

    // Titulo
    const title = document.createElement("h2");
    title.textContent="Alojamientos"
    container.appendChild(title)

    // Tabla
    const table = document.createElement("table");
    
    // Titulos de tabla
    const tableTitles = document.createElement("tr")
    const titleName = document.createElement("th")
    titleName.textContent="Nombre"
    tableTitles.appendChild(titleName);
    const titleUbi = document.createElement("th")
    titleUbi.textContent="Ubicación"
    tableTitles.appendChild(titleUbi);
    const titlePrecio = document.createElement("th")
    titlePrecio.textContent="Precio"
    tableTitles.appendChild(titlePrecio);
    const titleRating = document.createElement("th")
    titleRating.textContent="Rating"
    tableTitles.appendChild(titleRating);

    fetching().then((data)=>{
        data.forEach(t=>{
            const fila = document.createElement("tr")
            const columnaName = document.createElement("th")
            columnaName.textContent=t.nombre
            const columnaUbi = document.createElement("th")
            columnaUbi.textContent=t.ubicacion
            const columnaPrice = document.createElement("th")
            columnaPrice.textContent=`$${t.precio}`
            columnaPrice.classList.add("price")
            const columnaRating = document.createElement("th")
            columnaRating.textContent=`${t.rating}/5`
            columnaRating.classList.add("rating")

            
            fila.appendChild(columnaName)
            fila.appendChild(columnaUbi)
            fila.appendChild(columnaPrice)
            fila.appendChild(columnaRating)
            table.appendChild(fila)
        })
        
        
    })


    table.appendChild(tableTitles)
    container.appendChild(table)

    return container;
}