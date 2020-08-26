// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no

function entradaAlBar() {
    primerSaludo();
    comprobarIngresoAlBar();
}

function primerSaludo() {
    const MI_NOMBRE = "agustin";
    const NOMBRE_HERMANO = "fermin";
    let nombreUsuario = prompt("Bienvenido al Bar. Cual es tu nombre?" || "").toLowerCase();
    if (MI_NOMBRE === nombreUsuario) {
        alert(`Hola tocayo, yo tmb me llamo ${nombreUsuario} NDEHJ`);
    } else if (NOMBRE_HERMANO === nombreUsuario) {
        alert(`Te llamas ${nombreUsuario} igual que mi hermano`);
    } else if (nombreUsuario.trim().length === 0) { // esto es igual a esto (nombreUsuario.trim() === "") si no ingresara nada
        alert("No ingresaste un nombre valido");
    } else {
        alert(`Hola ${nombreUsuario}, todo bien prro?`);
    }
}
function comprobarIngresoAlBar() {
    let tieneDocumento = (prompt("Tenes el documento?")).toLowerCase();
    let edadUsuario;
    if (tieneDocumento === "si") {
        edadUsuario = prompt("Cuantos años tenes?");
        if (edadUsuario >= 18) {
            alert("Podes pasar prro");
        } else if (edadUsuario < 18) {
            alert("Tomatela pendejo");
        } else {
            alert("Edad mal ingresada");
        }
    } else if (tieneDocumento === "no") {
        alert("No podes pasar sin documento");
    } else {
        alert("No entendi la respuesta");
    }

}
entradaAlBar();