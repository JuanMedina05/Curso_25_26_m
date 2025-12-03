
/*
1. crear una función getWeatherByCity(cityName){
    que devuelva una data en json
}
2. crar una función llamada parseWeatherData(data){
    city, pais, temperatura, humedad, viento, descripción
}
*/
// Variables
const url=import.meta.env.URL;
const apiKey=import.meta.env.API_KEY;
const urlCompleta=`${url}q=${cityName}&units=metric&lang=es&appid=${apiKey}`

export async function getWeatherByCity(cityName){
    
    fetch(urlCompleta)
        .then((response) => {
        if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
    })
    .catch((error)=>console.error("Error:",error))
}

export async function parseWeatherData(data){

}