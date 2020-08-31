const $botonIngresar = document.querySelector("#boton-ingresar");
const $divResultado = document.querySelector("#resultado");

$botonIngresar.onclick = function(){
    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);
    
    $divResultado.innerText = `${primerNombre}, ${segundoNombre}, ${apellido}, ${edadUsuario}`;
    document.querySelector("h1").innerText = `Bienvenido ${primerNombre}`;
    //return false;
}