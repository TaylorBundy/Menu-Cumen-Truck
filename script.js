const imgsocial = document.querySelector('#ImgSocial');
const facebook = document.querySelector('#Facebook');
const instagram = document.querySelector('#Instagram');
const price = document.querySelectorAll('.price');
const page = document.querySelector('#page a');
const precios = [
    {name: 'burguer', valor: '6500'},
    {name: 'cordero', valor: '9000'},
    {name: 'pollo', valor: '5500'},
    {name: 'chori', valor: '4500'},
    {name: 'trucha', valor: '5000'},
    {name: 'veggie', valor: '4000'},
    {name: 'pancho', valor: '4000'},
    {name: 'fritas', valor: '4000'}
  ];
//definimos constante plataforma
const plataforma = navigator.userAgent;

window.onload = function() {
    cargarImg();
    for (let i = 0; i < precios.length; i++) {
        try {
            price[i].textContent = '';
        }
        finally {
            console.log(precios[i]);
            price[i].textContent = '$' + precios[i].valor;
        }
    }
    console.log(location.href);
    if (page.textContent == 'Comidas') {
        page.textContent = 'Bebidas';
        page.href = 'bebidas.html';
    } else if (page.textContent == 'Bebidas') {
        page.textContent = 'Comidas';
        page.href = 'index.html';
    } else if (location.href.includes('about')) {
        page.textContent = 'Comidas';
        page.href = 'index.html';
    }
}

//document.body.onload = cargarImg;

//Definimos la funcion que agrega los titulos a los componentes
function Titulos() {
    if (instagram.onmouseover) {
        instagram.title = 'Visitar página de Instagram de "Cumen Truck"';
    }
    if (facebook.onmouseover) {
        facebook.title = 'Visitar página de Facebook de "Cumen Truck"';
    }
}

//definimos la funcion para crear un nuevo div por cada item del menu
//para luego crear un nuevo elemento img para colocar el logo con efecto
function cargarImg(){
    var destino = document.querySelectorAll(".menu-item");
    if (destino == undefined)
        alert("No existe el bloque destino")
    else{
        for (let i = 0; i < destino.length; i++) {
            var nodoDivImg = document.createElement("div");
            nodoDivImg.id = 'nodo-img-item';
            nodoDivImg.className = 'nodo-img-item';
            destino[i].appendChild(nodoDivImg);
        }
        var nodo1 = document.querySelectorAll('#nodo-img-item');
        for (let c = 0; c < nodo1.length; c++) {
            var nodoImg = document.createElement("img");
            nodoImg.setAttribute("src", "Imagenes/logo-transparente.webp");
            nodoImg.id = 'img-item-' + c;
            nodo1[c].appendChild(nodoImg);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});