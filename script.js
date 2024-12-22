const imgsocial = document.querySelector('#ImgSocial');
const facebook = document.querySelector('#Facebook');
const instagram = document.querySelector('#Instagram');

function Titulos() {
    if (instagram.onmouseover) {
        instagram.title = 'Visitar página de Instagram de "Cumen Truck"';
    }
    if (facebook.onmouseover) {
        facebook.title = 'Visitar página de Facebook de "Cumen Truck"';
    }
}