const $botonCalcular = document.querySelector("#boton-calcular");
const $horasVideo = document.querySelector("#horas");
const $minutosVideo = document.querySelector("#minutos");
const $segundosVideo = document.querySelector("#segundos");
const $tiempoTotal = document.querySelector("#tiempo-total");
let horas = 0;
let minutos = 0;
let segundos = 0;
$botonCalcular.onclick = function(){
    horas = horas + Number($horasVideo.value);
    minutos = minutos + Number($minutosVideo.value);
    segundos = segundos + Number($segundosVideo.value);
    if(minutos >= 60){
        horas++;
        minutos = minutos - 60; 
    }
    if(segundos >= 60){
        minutos++;
        segundos = segundos - 60; 
    }
    $tiempoTotal.innerText = `Horas de Video: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`

}