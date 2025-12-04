/**
 * @author 
 * @param
 * @returns 
 */

export function createEj3(){
    function fetching(){
        const url = import.meta.env.VITE_URL;
        const port = import.meta.env.VITE_PORT;
        const urlPort = `${url}:${port}`;

        return fetch(`${urlPort}/peliculas`)
            .then((res)=>{
                if(!res.ok){
                    throw new Error("Fallo en la solicitud")
                }
                return res.json();
            })
            .then((data)=>data)
            .catch((error)=>console.error("Error",error));
    }

    // Contenedor
    const container = document.createElement("div")
    container.classList.add("movies-container")
    
    // Título tabla
    const title = document.createElement("h2")
    title.textContent="Películas"
    container.appendChild(title)
    
    // Titulo peliculas

    
    fetching().then((data)=>{
        data.forEach((films)=>{
            // Div card
            const card=document.createElement("div");
            card.classList.add("movie-card");

            // Titulo:
            const filmTitle = document.createElement("h3");
            filmTitle.textContent=films.titulo;
            filmTitle.classList.add("movie-title");
            card.appendChild(filmTitle)

            // Año:
            const filmYear = document.createElement("p")
            filmYear.textContent=films.año;
            filmYear.classList.add("movie-year");
            card.appendChild(filmYear)
            
            container.appendChild(card)
        })
    })


    return container;
}