import { createImageGrid } from "./ImageCard";

export function createGalleryApp(){
    // contenedor principal
    const container = document.createElement("div");
    container.className="min-h-screen bg-linear-to-br from-purple-100 via-white to-pink-900"

    // header
    const header = document.createElement("header");
    header.className = "bg-white shadow-lg sticky top-0 z-40";

    const headerContentDiv = document.createElement("div");
    headerContentDiv.className="max-w-7xl mx-auto px-6 py-6";

    const headerTitle = document.createElement("h1");
    headerTitle.className = "text-3xl font-bold text-purple-800 mb-2";
    headerTitle.textContent="Gelería de imágenes";

    const headerSubtitle = document.createElement("p");
    headerSubtitle.className = "text-gray-600";
    headerSubtitle.textContent="Aprende closures, funciones fábrica y manupulación del DOM";

    headerContentDiv.appendChild(headerTitle);
    headerContentDiv.appendChild(headerSubtitle);
    header.appendChild(headerContentDiv);

    // main ->
    const main = document.createElement("main");
    main.className = "max-w-7xl mx-auto px-6 py-8";

        //contado de favoritos
    const counterComponent=document.createElement("h2");
    counterComponent.textContent="aquí irá el componente favoritos"

        //modal de imagen
    const imageModal = document.createElement("h2");
    imageModal.textContent="aquí irá el componente modal de imagen"

        //ged de imágenes
    const gridComponent=document.createElement("h2");
    gridComponent.textContent="aquí irá el componente grid de imágenes"
    const imageGrid=createImageGrid();


    main.appendChild(counterComponent);
    main.appendChild(imageModal);
    main.appendChild(gridComponent);    

    // footer -> div con el nombre y url de github
    const footer=document.createElement("footer");
    footer.className="";

    const footerContentDiv=document.createElement("div");
    footerContentDiv.className="";

    const footerPersonalName = document.createElement("p");
    footerPersonalName.textContent="Juan Pérez Medina"

    const footerGithubURL = document.createElement("img")
    footerGithubURL.className=""

    //añadimos todo al container
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);

    return{
        element:container,
    };
}
