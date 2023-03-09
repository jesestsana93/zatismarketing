$(function () {
    /*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/
    /*     $('#menu-principal .navbar-toggler').click(function () {
     */
    $('.boton-menu').toggleClass('icono-cerrar');


    /*Al hacer click en un enlace del menú principal */
    $('#enlacesMenuPrincipal .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#enlacesMenuPrincipal .navbar-collapse').collapse('hide');
    });


    /*------------------------
    2. INICILIZANDO WOW
    -------------------------*/
    new WOW().init();

    /*---------------------------------------------------------------
    3. Iniciando smoothScroll (Scroll Suave) para la flecha de bajar
    ----------------------------------------------------------------*/
    smoothScroll.init({
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        offset: 100, // Integer. How far to offset the scrolling anchor location in pixels
    });

    /*---------------------------------------------------------------
    4. INICIANDO "page-scroll-to-id" para navegacion ligera del menu
     ---------------------------------------------------------------*/
    $('#enlacesMenuPrincipal a').mPageScroll2id({
        offset: 70,
        highlightClass:'active'
    });

    /*---------------------------------
       CABECERA ANIMADA
     ----------------------------------*/
    $(window).scroll(function () {
        var nav = $('.encabezado');
        var scroll = $(window).scrollTop();
        console.log("scroll: " + scroll);
        if (scroll >= 80) {
            nav.addClass('.fondo-menu');
        } else {
            nav.removeClass('.fondo-menu');
        }
    });
   

    /*-----------------------------------------------------------
    2. CONFIGURACION DE SLICK PARA LA PARTE DE ALGUNOS DE NUESTROS CLIENTES
    ------------------------------------------------------------*/
    $('.clientes').slick({
        dots: true,
        infinite: true,
        speed: 600,
        arrows: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        responsive: [
            {
                //Vista lg >=992px
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                //Vista md >=768px
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                //Vista sm >=576px
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

});