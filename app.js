// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let inputAmigos = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let botonAgregar = document.querySelector('.button-add');
let resultadoSorteo = document.getElementById('resultadoSorteo');


function agregarAmigo() {

let nuevoAmigo = inputAmigos.value.trim();
  if (nuevoAmigo === '') {
    alert('Por favor, ingresa un nombre');
        return;
      }

    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = nuevoAmigo;

    listaAmigos.appendChild(nuevoItem);
    inputAmigos.value = '';
    mostrarListaAmigos();
  
}

function mostrarListaAmigos() {
    let amigos = listaAmigos.getElementsByTagName('li');
    for (let i = 0; i < amigos.length; i++) {
    listaAmigos.appendChild(amigos[i]);
  }
}
botonAgregar.addEventListener('click', function() {
    let nuevoAmigo = inputAmigos.value.trim();
    if (nuevoAmigo !== '') {
      agregarAmigo();
    }
  });


    function sortearAmigo() {
    
    let amigos = listaAmigos.getElementsByTagName('li');
    
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let listaAmigosArray = Array.from(amigos);

    let amigoSorteado = listaAmigosArray[Math.floor(Math.random() * listaAmigosArray.length)].textContent;
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    }
