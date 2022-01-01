/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

<script type="text/javascript"> 

// función que se ejecute al darle clic a cada una de las imágenes
// pasamos como atributo a la función la palabra reservada this que hace referencia al propio elemento

function cambiar(imagen) {

    var anterior = "demo-image";
    var aux = "ipad";

    if(anterior != "demo-image"){
        aux = anterior;
        anterior = imagen.src;  //obtenemos la ruta de la imagen con imagen.src
    }else{
        anterior = imagen.src;
    }

    console.log("Anterior: " + anterior);
    console.log("Auxiliar: " + aux);

    //obtener el atributo src de la imagen que has clicado. una vez obtengas la ruta de la imagen en la que acabas de hacer clic, se la puedes asignar a la imagen 2    
} 

</script>

<body>

    <img id="assets" src=".\demo-image\01.jpg" alt="demo-image" onclick="cambiar(this)" name="ipad">  
    <img id="assets" src=".\demo-image\02.jpg" alt="demo-image" onclick="cambiar(this)" name="ipad">   

</body>
