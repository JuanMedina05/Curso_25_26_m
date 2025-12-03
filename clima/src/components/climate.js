export default function createClimateApp(){
    const url=import.meta.env.URL;
    const apiKey=import.meta.env.API_KEY;
    const urlCompleta=`${url}q=${cityName}&units=metric&lang=es&appid=${apiKey}`

    // DOM
    const container=document.createElement("div");
    container.className=""
    
    
    // funcionalidades:
    const searchCard=createSearchCard(callback)

}