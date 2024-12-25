const imgsocial = document.querySelector('#ImgSocial');
const facebook = document.querySelector('#Facebook');
const instagram = document.querySelector('#Instagram');
const price = document.querySelectorAll('.price');
const page = document.querySelector('#page a');
const precios = [
    {name: 'burguer', valor: '6500'},
    {name: 'cordero', valor: '9000'},
    {name: 'pollo', valor: '5500'},
    {name: 'choritaco', valor: '4500'},
    {name: 'trucha', valor: '5000'},
    {name: 'veggie', valor: '4000'},
    {name: 'pancho', valor: '4000'},
    {name: 'fritas', valor: '4000'}
  ];
//definimos constante plataforma
const plataforma = navigator.userAgent;

window.onload = function() {
    cargarImg();

    /* for (let v = 0; v < price.length; v++) {
        var precioId = price[v].id;
        const result = precios.find(({ name }) => name === precioId.toLowerCase());
        for (let i = 0; i < precios.length; i++) {
            price[v].textContent = '$' + result.valor;
        }
    } */

    //por cada elemento dentro de la constante "price", realizamos la busqueda del "id"
    //dentro del array "precios".
    //una vez localizado el ID del elemento, dentro del array PRICE, colocamos el valor del mismo
    //dentro del "TEXTCONTENT" del elemento.
    price.forEach((element) => {
        const precioId = element.id.toLowerCase();
        const result = precios.find(({ name }) => name === precioId);
        if (result) {
            element.textContent = '$' + result.valor;
        }
    });

    //console.log(location.href);
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

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (plataforma.includes('Win')) {
    document.addEventListener('DOMContentLoaded', () => {
        //const menuToggle = document.querySelector('.menu-toggle');
        //const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });
} else if (plataforma.includes('Android')) {
    menu.classList.toggle('active');
    window.onscroll = function() {scrollFunction()};
};

const mybutton = document.getElementById("myBtn");
const topp = document.querySelector('.top');
let a = '';
let b = '';
let scrolll = '';
// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;
    //var a = document.documentElement.scrollTop;
    //var b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(a);
    //console.log(document.documentElement.clientHeight);
    scrolll = this.scrollY;
    a = document.body.offsetHeight || document.documentElement.offsetHeight;
    b = a - screen.height;
    //console.log(document.body.offsetHeight);
    //console.log(document.documentElement.offsetHeight);
    //console.log(screen.height);
    //console.log(scrolll);
    //console.log(b);
    console.log('scrollP: ' + scrollPosition);
    console.log('bottomP: ' + bottomPosition);
    if (isBottomOfPage()) {
        console.log("¡Has llegado al final de la página!");
        alert(window.innerHeight + window.scrollY);
        // Acciones personalizadas
    }
    if (isBottomOfPage()) {
    //if (scrollPosition >= bottomPosition) {
    //if (b == scrolll) {
        topp.style.bottom = 105 + 'px';
        console.log("¡Has llegado al final de la página!");
    } else {
        topp.style.bottom = 20 + 'px';
    }
  } else {
    mybutton.style.display = "none";
  }
}

function isBottomOfPage() {
    return window.scrollY + window.innerHeight >= Math.round(document.documentElement.scrollHeight);
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if ('scrollTo' in window) { // Verifica si el navegador soporta scrollTo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });                
    } else {
        // Fallback para navegadores más antiguos
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(topFunction);
            window.scrollTo(0, currentScroll - currentScroll / 8); // Efecto suave manual            
        }
    }
}

window.addEventListener("scroll", (event) => {
    //let scroll = this.scrollY;
    //console.log(scroll)
});