const imgsocial = document.querySelector('#ImgSocial');
const facebook = document.querySelector('#Facebook');
const instagram = document.querySelector('#Instagram');
const price = document.querySelectorAll('.price');
const page = document.querySelector('#page a');
const metaContent = document.querySelector('meta[name="description"]');
const ContMeta = 'Cumen Truck ofrece una deliciosa variedad de comidas rápidas, incluyendo hamburguesas, tacos y panchos, elaborados con ingredientes frescos y de calidad. Disfruta de opciones como la Hamburguesa de Cordero con cebolla caramelizada y alioli, o el Taco Veggie con verduras salteadas, todo a precios accesibles. ¡El buen sabor te espera en Cumen Truck!';
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

/* $(document).load (function() {
    $('meta[property="og:title"]').remove();
    $('meta[property="og:description"]').remove();
    $('meta[property="og:url"]').remove();
    $("head").append('<meta property="og:title" content="blubb1">');
    $("head").append('<meta property="og:description" content="blubb2">');
    $("head").append('<meta property="og:url" content="blubb3">');
  }); */

window.onload = function() {
    cargarImg();
    metaContent.content = ContMeta;
    //console.log(metaContent.content);
    //console.log(document.querySelector('meta[name="description"]').content);
    //console.log(navigator.userAgent);
    //var parser = new UAParser();
    //console.log(parser.getResult());
    //alert(parser.getResult().browser.name + ' - ' + parser.getResult().browser.version);
    //alert('width: ' + screen.width + ' - height: ' + screen.height);


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
const inicios = 85;
const target = 20;
let final = '';
//const TargetHeight = document.documentElement.offsetHeight - screen.height;
const TargetHeight = document.documentElement.offsetHeight - window.innerHeight;

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrolll = this.scrollY;
    mybutton.style.display = "block";
    //const scrollPosition = window.scrollY + window.innerHeight;
    //const bottomPosition = document.documentElement.scrollHeight;
    //var a = document.documentElement.scrollTop;
    //var b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(a);
    //console.log(document.documentElement.clientHeight);
    //scrolll = this.scrollY;
    //a = document.body.offsetHeight || document.documentElement.offsetHeight;
    //b = a - screen.height;

    if (isBottomOfPage()) {
    //if (scrollPosition >= bottomPosition) {
    //if (b == scrolll) {
        topp.style.bottom = 85 + 'px';
    } else if (scrolll <= Math.max(document.documentElement.scrollHeight) - window.innerHeight) {
        final = inicios - (TargetHeight - scrolll);
        if (final > target && final <= inicios) {
        //console.log(Math.max(target,final) + 'px');
        topp.style.bottom = Math.max(target,final) + 'px';
        } else {
            topp.style.bottom = 20 + 'px';
            //console.log('llegamos a 20');
        }
    }
  } else {
    mybutton.style.display = "none";
  }
}

function isBottomOfPage() {
    //return window.scrollY + window.innerHeight >= Math.round(document.documentElement.scrollHeight);
    return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
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

function getAndroidVersion() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const match = userAgent.match(/Android\s([0-9\.]+)/);
    return match ? match[1] : null; // Devuelve la versión o null si no es Android
}

/* const androidVersion = getAndroidVersion();

if (androidVersion) {
    console.log(`El dispositivo está ejecutando Android ${androidVersion}`);
} else {
    console.log("El dispositivo no está usando Android.");
} */

// Verifica si el dispositivo es móvil
function esMovil() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (esMovil()) {
    document.addEventListener('DOMContentLoaded', () => {
        const menuItems = document.querySelectorAll('.menu-item');
        const detailView = document.createElement('div');
        detailView.id = 'details';
        detailView.className = 'detail-view';
        //detailView.classList.add('detail-view');
        //document.body.appendChild(detailView);
        document.querySelector('main').appendChild(detailView);

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Calcular la posición del artículo
                const rect = item.getBoundingClientRect();
                const positionX = rect.left + window.scrollX;
                const positionY = rect.top + window.scrollY;
                //console.log(rect.left);
                //console.log(rect.top);

                // Establecer el estilo de `detailView` para que coincida
                detailView.style.left = `${positionX}px`;
                detailView.style.top = `${positionY}px`;
                detailView.style.width = `${rect.width}px`; // Mantener el ancho del artículo
                detailView.style.height = `${rect.height}px`; // Mantener la altura del artículo
                detailView.style.transform = 'scale(0)';

                // Forzar un reflow para registrar el estado inicial
                detailView.offsetHeight;

                //setTimeout(() => {
                    // Ocultar el artículo
                    //item.classList.add('hidden');
                //}, 300);
                //requestAnimationFrame(() => {
                    item.classList.add('hidden');
                //});

                setTimeout(() => {
                    item.ontransitionend = (evento) => {
                        if (evento.propertyName === 'transform' && item.classList.contains('hidden')) { // Asegura que estamos escuchando transform
                        //console.log('La transición de transform ha terminado.');
                        detailView.classList.add('active');
                        //console.log(parseFloat(window.getComputedStyle(detailView).transform));
                        lalalala(detailView);
                        detailView.style.transform = 'scale(1)';
                        //return true;
                        // Puedes realizar acciones aquí, como ocultar el elemento completamente
                        //miElemento.style.display = 'none';
                        }
                    };
                }, 300);

                // Mostrar información detallada
                const detailContent = `
                    <h2>${item.querySelector('h3').textContent}</h2>
                    <p>${item.querySelector('p:not(.price)').textContent}</p>
                    <button class="back-button"></button>
                `;
                detailView.innerHTML = detailContent;

                // Manejar el botón "Volver"
                const backButton = detailView.querySelector('.back-button');
                backButton.addEventListener('click', () => {
                    // Animar `detailView` hacia la derecha
                    //detailView.classList.remove('active');
                    //detailView.style.transform = 'scale(0)';
                    if (lalalala(detailView) > 0) {
                        detailView.style.transform = 'scale(0)';
                    } else {
                        detailView.style.transform = 'scale(1)';
                    }
                    detailView.classList.replace('active', 'final');
                    //console.log(window.getComputedStyle(detailView).transform);
                    lalalala(detailView);

                    setTimeout(() => {
                        detailView.ontransitionend = (evento) => {
                            if (evento.propertyName === 'transform' && detailView.classList.contains('final')) { // Asegura que estamos escuchando transform
                                //console.log('La transición de transform ha terminado.');
                                detailView.classList.remove('final');
                            //detailView.classList.add('active');
                            //detailView.style.transform = 'scale(1)';
                            detailView.innerHTML = ''; // Limpia el contenido
                        item.classList.remove('hidden'); // Vuelve a mostrar el elemento
                            }
                        };
                    },300);
                    //requestAnimationFrame(() => {
                        //detailView.classList.add('active');
                    //});


                        //detailView.classList.replace('active', 'final')
                        //detailView.classList.remove('final');
                        //detailView.classList.toggle('exit');

                    //detailView.classList.add('final');
                    // Mostrar de nuevo el menú-item después de un corto retraso
                    //setTimeout(() => {
                        //detailView.classList.remove('exit'); // Reset de animación
                        //detailView.classList.remove('final');
                        //detailView.innerHTML = ''; // Limpia el contenido
                        //item.classList.remove('hidden'); // Vuelve a mostrar el elemento
                    //}, 300); // Duración de la animación (0.3s)

                });
            });
        });
    });
}

/* function terrrrmina(item) {

    item.ontransitionend = (evento) => {
        if (evento.propertyName === 'transform') { // Asegura que estamos escuchando transform
          console.log('La transición de transform ha terminado.');
          return true;
        }
    };
} */

function lalalala(ele){
    const estilo = window.getComputedStyle(ele);
      const transform = estilo.transform;
      if (transform === 'none') {
        console.log('No se ha aplicado ninguna transformación.');
        return;
      }
      // Analizamos la matriz de transformación
      const valores = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
      const escalaX = parseFloat(valores[0]); // El valor de scaleX está en la posición 0
      const escalaY = parseFloat(valores[3]); // El valor de scaleY está en la posición 3 (en una matriz 2D)
      let resultado = '';
      if (escalaX > 0 && escalaY > 0) {
        resultado = 1;
      } else {
        resultado = 0;
      }      
      //console.log(resultado);
      //console.log(`ScaleX: ${escalaX}, ScaleY: ${escalaY}`);
      return resultado;
}