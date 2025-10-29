

// Función asincrona usando PROMISE

//export const dataJSONPromise= new Promise((res,rej){

//});


// Función asicnrona usando asinc
export async function dataJSONPromiesAsinc(){
    try {
    const response = await fetch(
      VITE_API_URL
    );
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    const datos = await response.json();
    console.log("Datos desde la API:", datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
