//Piedra papel o tijera

//Opciones de jugada
var options = ["piedra", "papel", "tijera"]
//Número aleatorio entre 0 y 2, para luego asignar como jugada del PC a partir del array options
var random = Math.floor(Math.random()*options.length)
//Se declaran las variables como globales para que cada función pueda acceder a ellas
var player1
var pc

//El jugador1 escoge su opción, y el PC se le asigna aleatoriamente a partir de options
function escoger() {
    var player1  = prompt("Hola Jugador 1 , juegas contra el PC. \nElije: Piedra, Papel o Tijera")
    player1 = player1.toLowerCase();
    var pc = options[random]    
    return jugar_switch(player1, pc)
}

//Juego con Switch
function jugar_switch(player1, pc) {

    switch(true) {
        case (player1 == "piedra" && pc =="tijera" || player1 =="tijera" && pc=="papel" || player1 == "papel" && pc== "piedra"):
            alert("PC eligió "+pc)
            alert("Ganaste!")
            break
        case (player1 == "papel" && pc== "tijera" || player1 == "piedra" && pc =="papel" || player1 =="tijera" && pc=="piedra"):
            alert("PC eligió "+pc)
            alert("Ganó PC!")
            break
        case (player1 =="tijera" && pc=="tijera" || player1 == "papel" && pc== "papel" || player1 == "piedra" && pc =="piedra"):
            alert("PC eligió "+pc)
            alert("Empataron")
            break
        default:
            alert("Escogiste un valor incorrecto. Por favor intenta nuevamente")
            escoger()
    }
}


/* Juego con if else

function jugar(player1, pc) {

    if (player1 == "Piedra" && pc =="Tijera" || player1 =="Tijera" && pc=="Papel" || player1 == "Papel" && pc== "Piedra") {
        alert("PC eligió "+pc)
        alert("Ganaste!")
    }

    else if (player1 == "Papel" && pc== "Tijera" || player1 == "Piedra" && pc =="Papel" || player1 =="Tijera" && pc=="Piedra") { 
        alert("PC eligió "+pc)
        alert("Ganó PC!")
    }

    else if (player1 =="Tijera" && pc=="Tijera" || player1 == "Papel" && pc== "Papel" || player1 == "Piedra" && pc =="Piedra") {
        alert("PC eligió "+pc)
        alert("Empataron")
    }

    else {
        alert("Escogiste un valor incorrecto. Por favor intenta nuevamente")
        escoger()
    }

}
*/