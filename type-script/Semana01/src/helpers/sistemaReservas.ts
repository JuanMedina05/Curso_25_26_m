// Crear un sistema de reserva de un restaurante que tenga un map con clave, la fecha de la reserva en formato americano (YYYY/MM/DD) y el valor es un set con DNI
// de los clientes que han reservado ese día
// funciones: agregarReserva, cancelarReserva, mostrarReserva, estadisticas
const reservas = new Map<string,Set<string>>();
export function sistemaReservas(){
    console.log("Sistema de reservas iniciado");
function agregarReserva(fecha:string,dni:string):void{
    if(reservas.get(fecha)?.has(dni)){
        reservas.set(fecha,new Set<string>());
    }
}

agregarReserva("2024/10/15","12345678A");
agregarReserva("2024/10/15","87654321B");
agregarReserva("2024/10/16","11223344C");
agregarReserva("2024/10/16","44332211D");

function cancelarReserva(fecha:string,dni:string):boolean{
if(reservas.has(fecha)&&reservas.get(fecha)?.has(dni)){
    reservas.delete;
    return true;
}
return false;
}
cancelarReserva("2024/10/15","12345678A");

function mostrarReserva(fecha:string,dni:string):void{
    if(reservas.has(fecha)){
        console.log("lomo");
        const clientes = reservas.get(fecha);
        if(clientes?.has(dni)){
            console.log(`- Fecha: ${fecha} - DNI: ${dni}`);
        } else{
            console.log(`No hay reserva para el DNI: ${dni} en la fecha: ${fecha}`);
        }
    }
}
mostrarReserva("2024/10/15","87654321B");
mostrarReserva("2024/10/15","12345678A");
mostrarReserva("2024/10/16","11223344C");

function estadisticas(){
    reservas.forEach((clientes,fecha)=>{
        console.log(`Fecha: ${fecha} - Nº de reservas: ${clientes.size}`);
    });
}
estadisticas();
}