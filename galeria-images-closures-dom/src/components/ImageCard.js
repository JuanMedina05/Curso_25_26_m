import { imagesData } from "../data/images";
/*
id: 1,
    title: 'MontaÃ±as al atardecer',
    category: 'naturaleza',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    author: 'John Doe',
    date: Date.now() - 86400000 * 1,
*/
export function createImageCard(image,onImageClick,onFavoriteToggle){
    // contenedor principal
    const card = document.createElement("div");
    card.className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative"

}

export function createImageGrid(){
    const data = imagesData;
    data.forEach(imagen=>{
        console.log(imagen.title);
    })
}