// crear un sistema de categorías

const catalogo = new Map<string,Set<string>>();

function addProduct(category:string, product:string):boolean{
    if(!catalogo.has(category)){
        catalogo.set(category,new Set<string>());
        return true;
    }
    // añadir el producto a la categoría

    return false;
}

addProduct("Electronica","Teclado");
addProduct("Musica","Teclado");
addProduct("Deporte","Zapatillas");

// mostrar catálogo de productos.
function showCatalog():void{
    console.log("_________Catálgo de productos:____________");
    /*catalogo.forEach((productos,categoria)=>{
        console.log(`Categoría: ${categoria} - Nº de productos: ${catalogo.size}`);
        productos.forEach(()=>{
            
        });
    });*/

    for(const [categoria,productos]of catalogo){
        console.log(`Categoría: ${categoria} - Nº de productos: ${catalogo.size}`);
        for (const producto of productos){
            console.log(`- ${producto}`);
        }
    }
}

showCatalog();

// función que busque unproducto por nombre
function searchProduct(nameProducto:string):string[]{
    const categoriasEncontradas: string[] = [];

    for (const [categoria,productos] of catalogo){
        if(productos.has(nameProducto)){
            categoriasEncontradas.push(categoria);
        }
    }
    return categoriasEncontradas;
}

console.log(`Las categorias del producto Teclado son: ${searchProduct("Teclado")}`);

