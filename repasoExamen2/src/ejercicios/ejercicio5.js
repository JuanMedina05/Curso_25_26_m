export function createEj5(){
    const url = import.meta.env.VITE_URL;
    const port = import.meta.env.VITE_PORT;
    const urlCompleta = `${url}:${port}`

    function fetching(){
        return fetch(`${urlCompleta}/ubicaciones`)
            .then((response)=>{
                if(!response.ok){
                    throw new Error("Solocitud errada");
                }
                return response.json();
            })
            .then((data)=>data)
            .catch((error)=>console.error("Error:",error));     
    }

    // DOM
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent="Buscar alojamiento"
    container.appendChild(title)

    // Form
    const form = document.createElement("form");

    const selectUbi = document.createElement("select")
    
    fetching().then((data)=>{
        data.forEach((ubi)=>{
            const valor = document.createElement("option")
            valor.textContent=ubi.nombre
            selectUbi.appendChild(valor)
        })
    })
    
    const checkIn = document.createElement("input")
    checkIn.type="date"
    const checkOut = document.createElement("input")
    checkOut.type="date"

    const search = document.createElement("button")
    //search.addEventListener("click")

    form.appendChild(selectUbi)
    form.appendChild(checkIn)
    form.appendChild(checkOut)
    container.appendChild(form)
    return container;
}