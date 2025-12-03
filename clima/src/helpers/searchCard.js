export default function createSearchCard(onSearch){
    //variable privada que diga si estoy buscando
    let isSearching=false

    // DOM
    const container = document.createElement("div");
    container.className="bg-white rounded-lg shadow-lg p-6 mb-6"
    
    // titulo
    const title = document.createElement("h2")
    title.textContent="Buscar ciudad"

    // input
    const input=document.createElement("input")
    input.type="text"
    input.placeholder="Introduzca la ciudad"

    //botón
    const btn=document.createElement("button")
    btn.textContent="Buscar"

    // crear párrafo statusElement que permita especificar los
    // siguiente estados a través de la función 
    // setStatus(message,type="info")
    // Estados:
    // - loading (color blue-600)
    // - error (color red-600)
    // - succes (color green-600)
    // - info (color gray-600)
    // que permita modificar el valor del componente statusElement

    const statusElement = document.createElement("p")
    statusElement.textContent=""
    function setStatus(message,type="info"){
        statusElement.textContent="message"
        if(type=="info"){
            statusElement.className="text-gray-600"
        }else if(type=="error"){
            statusElement.className="text-red-600"
        }else if(type=="succes"){
            statusElement.className="text-green-600"
        }else if(type=="loading"){
            statusElement.className="text-blue-600"
        }
    }

    async function performSearch(){
        const cityName = input.value.trim().toLowerCase();
        if(!cityName){
            setStatus("Escribe el nombre de la ciudad","error");
            return;
        }
        // buscar
        isSearching=true;
        

        try{
            await onSearch(cityName);
            setStatus("Busqueda realizada correctamente","success");
        }catch(error){
            setStatus("Error al buscar","error");
            throw new Error("Error:",error.message)
        }finally{
            isSearching=false;
        }
    

        // Eventos
        // performSearch no debe llevar parentesis en la siguiente
        // porque es un callback
        searchButton.addEventListener("clic",performSearch)

        input.addEventListener("keypress",event=>{
            if(event.key==="Enter"){
                performSearch()
            }
        })  

    }
    return{
        element:container,
        focus:()=>input.focus(),
        clearForm:()=>{
            input.value="";
            setStatus("");
            isSearching=false;
        },
        getValue:()=>input.value.trim(),
    }
}

