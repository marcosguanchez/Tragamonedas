// CREAMOS VARIABLES
window.onload = inicio 
// ARREGLO DE TODAS LAS IMAGENES DEL TRAGAMONEDAS
let imagenes = ['cereza.png','coco.png','limon.png','manzana.png','naranja.png','pera.png','pina.png','sandia.png','uvas.png'] 
let numeros_actuales = []

// FUNCIONES DE EMPEZAR LA TRAGAMONEDAS Y CERRAR LA VENTANA CUANDO GANAS
function inicio(){
    document.getElementById('tirar').onclick = lanzar_inicio
    document.getElementById('cruz').onclick = cerrar
}

// FUNCION DONDE SE MUESTRA EL RESULTADO DE LAS IMAGENES
function lanzar_inicio(){
    numeros_actuales = []
    for(let k = 0; k < document.getElementsByClassName('boton').length; k++){
    numeros_actuales.push(escoger_numero())
    mostrar_imagen(k,numeros_actuales[k])
    }
    comparar()
}

// SE LE ASIGNA UN NUMERO RANDOM SEGUN LA CANTIDAD DE IMAGENES QUE HAY EN EL ARREGLO DEL PRINCIPIO
function escoger_numero(){
    let azar = Math.floor(Math.random()*imagenes.length)
    return azar
}

// SE SELECCIONA LA IMAGEN Y SE CAMBIA POR UNA RANDOM DEL ARREGLO DEL PRINCIPIO
function mostrar_imagen(num, im){
    document.getElementsByClassName('imagen')[num].getElementsByTagName('img')[0].src='img/'+imagenes[im]
}

// COMPARA SI TODAS LAS IMAGENES SON IGUALES Y TE MUESTRA UNA VENTANA 
function comparar(){
    if(numeros_actuales[0]==numeros_actuales[1] && numeros_actuales[1]==numeros_actuales[2]){
        let mensaje = `Ganaste!!!`
        mostrar_mensaje(mensaje)
    }
}

// POSICION DE LA VENTANA
function mostrar_mensaje(m){
    document.getElementById('velo').style.display='flex'
    document.getElementById('mensaje').innerHTML = m
}

// FUNCION PARA ARREGLAR CERRAR LA VENTANA CON EL MENSAJE
function cerrar(){
    document.getElementById('velo').style.display='none'
}