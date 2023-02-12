$(function () {
    /*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/
    /*     $('#menu-principal .navbar-toggler').click(function () {
     */
    $('.boton-menu').toggleClass('icono-cerrar');
});

/*Al hacer click en un enlace del menú principal */
$('#menu-principal .navbar-nav a').click(function () {
    /* 1) Quita la clase ".icono-cerrar" */
    $('.boton-menu').removeClass('icono-cerrar');

    /*2) Contraemos el menu */
    $('#menu-principal .navbar-collapse').collapse('hide');
});

/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/*-----------------------------------------------------------
2. INICIANDO "page-scroll-to-id"
-------------------------------------------------------------*/
$('#menu-principal a').mPageScroll2id({
    offset: 100,
    highlightClass: 'active'
});

/*-----------------------------------------------------------
3. CONFIGURACION DE SWIPER PARA LA PARTE DEL BANNER
------------------------------------------------------------*/
const swiper = new Swiper('#animacion', {
    /*Botones de navegación */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    /*Botones de paginación */
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 500,
    effect: 'fade',
    grabCursor: true,
    loop: true,
    //   autoplay: {
    //     delay: 10000,            
    //   },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    }
});

/*-----------------------------------------------------------
4. INICIANDO jquery.counterup
-------------------------------------------------------------*/
$('.counter').counterUp({
delay: 10,
time: 2000
});
});

/*-----------------------------------------------------------
5. IMAGEN DE USUARIO DE DONACION DE SANGRE
------------------------------------------------------------*/
$(document).on('change', '#file-user', function () {
    var filesCount = $(this)[0].files.length;
    var textbox = $(this).prev();
    var ext = $(this).val().split('.').pop();
    var archivo = document.getElementById("file-user").files[0];

    if (ext == "png" || "jpg") {
        if (filesCount === 1) {

            var reader = new FileReader();
            reader.readAsDataURL(archivo);
            var fileName = $(this).val().split('\\').pop();
            textbox.text(fileName);
            reader.onloadend = function () {
                document.getElementById("img").src = reader.result;
            }
        } else {
            textbox.text(filesCount + ' files selected');
        }

    } else {
        $(this).val('');
        Toastify({
            text: "El archivo debe ser una imagen",
            duration: 3000,
            className: "info",
            // avatar: "../../assets/img/logop.png",
            style: {
                background: "linear-gradient(to right, red, orange)",
            },
            offset: {
                x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 90 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
        }).showToast();
    }
});

/*-----------------------------------------------------------
6. IMAGEN DE LA CAMPAÑA
------------------------------------------------------------*/
$(document).on('change', '#file-campaña', function () {
    //alert("Dentro");
    var filesCount = $(this)[0].files.length;
    var textbox = $(this).prev();
    var ext = $(this).val().split('.').pop();
    var archivo = document.getElementById("file-campaña").files[0];

    if (ext == "png" || "jpg") {
        if (filesCount === 1) {

            var reader = new FileReader();
            reader.readAsDataURL(archivo);
            var fileName = $(this).val().split('\\').pop();
            textbox.text(fileName);
            reader.onloadend = function () {
                document.getElementById("img").src = reader.result;
            }
        } else {
            textbox.text(filesCount + ' files selected');
        }

    } else {
        $(this).val('');
        Toastify({
            text: "El archivo debe ser una imagen",
            duration: 3000,
            className: "info",
            // avatar: "../../assets/img/logop.png",
            style: {
                background: "linear-gradient(to right, red, orange)",
            },
            offset: {
                x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: 90 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
        }).showToast();
    }
});