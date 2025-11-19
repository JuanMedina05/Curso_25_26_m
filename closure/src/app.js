
export const app=()=>{
    // primera función closure
    let crearClosure =()=>{
        let mensaje = "Yo soy tu closure";
        return()=>{
            console.log("Mensaje:", mensaje)
        }
    }
    const miClosure=crearClosure();
    miClosure();

    //
    let nivelGlobal ="Global"
    const funcionExterna =()=>{
        let nivelExterno="Soy del scope externo"
        const funcionInterna =()=>{
            let nivelInterno="Soy del scope interno"
            console.log("Accediendo a:",nivelGlobal)
            console.log("Accediendo a:",nivelExterno)
            console.log("Accediendo a:",nivelInterno)
        }
        funcionInterna();
    }
    funcionExterna();

    // Ejercicios Encapsulación
    /*
    * objetoPublico saldo, retirarDinero(cantidad) <- retirar ese dinero del saldo
    *  
    */
    // Versión mala
    const objetoPublico ={
        saldo:1000,
        retirarDinero: function(cantidad){
            this.saldo-=cantidad;
        },

    };
    objetoPublico.retirarDinero(100);
    console.log("Saldo:",objetoPublico.saldo);
    // Versión 2.0
    const crearCuentaBancario=(saldoInicial=0)=>{
        // saldo ha de ser private
        let saldo = saldoInicial;
        return{
            obtenerSaldo:()=>saldo,
            depositar:(cantidad=0)=>{
                if(cantidad>0){
                    saldo+=cantidad
                }
            },
            retirarDinero:(cantidad=0)=>{
                if(cantidad<saldo){
                    retirarDinero-=cantidad
                }
            },
        }
    }
    //Primera cuenata:
    const miCuenta1 = crearCuentaBancario(1000);
    miCuenta1.depositar(100)
    console.log(miCuenta1.obtenerSaldo())
    const miCuenta2 = crearCuentaBancario(1000);

    // Crear un contador que pueda incrementar decrementar resetear y obtener el valor del 
    // contador. 
    // Crear dos contadores uno que empiece en 10 y otro que empiece en 0 y vaya 
    // hasta el 10. 
    // Ejemplificar utilizando un temporizador de 1 segundo como los contadores 
    // uno sube y otro baja, utilizando los metodos del contador.
    // setInterval(funcion,1000)
    console.log("***** CONTADOR *****")
    const contador=(valorInicial=0)=>{
        let valor = valorInicial;
        return{
            incrementar:(cantidad=1)=>{
                valor+=cantidad
                return valor;
            },
            decrementar:(cantidad=1)=>{
                valor-=cantidad
                return valor;
            },
            resetear:()=>{valor=valorInicial},
            obtenerValor:()=>valor
        }
    }
    const cont1=contador(10)
    const cont2=contador(0)

    /*const id = setInterval(()=>{
        if(cont1.obtenerValor()>0){
            cont1.decrementar()
            console.log(cont1.obtenerValor())
        }}
        ,1000)
    */
    // Ejemplificar un carrito de la compra persistente utilizando closure y 
    // estableciendo la persistencia de datos usando una base de datos SQLite3
    // Que permita insertar productos, insertar cantidad de productos, eliminar productos
    // y calcular total del carriot.

    function crearCarrito(){
        let productos=[{}]
        return{
            insertarProducto:()=>{},
        }
    }
    
}

