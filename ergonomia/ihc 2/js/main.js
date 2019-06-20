(function ($) {
    $(document).ready(function() {
        
        window.dmedicina = {};
        var ancho = $( window ).width();

        $('input[autocomplete="off"]').val('');

        /* 
        * -------------
        */


        if ($('#main-menu').length >  0) {        

            
            var ctrlLimit    = $('#sesion').length>0 ? $('#sesion').offset().top : 0;
            var headerHeight = $('body > header').length>0 ? $('body > header').outerHeight() : 0;
            var menuHeight   = $('#main-menu').length>0 ? $('#main-menu').outerHeight() : 0;
            var lastScrollTop = 0;
            $(document).scroll(function () {

                var scrollTop = $(this).scrollTop();   
                var littleHeader = scrollTop > ctrlLimit;
                var startHiddenMenu = scrollTop-ctrlLimit > menuHeight;
                var mtMenu = parseInt($('#main-menu div').css('margin-top'));
                var scrollUp = scrollTop < lastScrollTop;
                
                if (littleHeader) {
                    $('body').addClass('logo-fixed');
                    $('main').css('padding-top', headerHeight + 'px');
                    if (!startHiddenMenu && !scrollUp) {
                        $('#main-menu div').css('margin-top', -scrollTop+ctrlLimit + 'px'); 
                    };
                    // if (startHiddenMenu && !scrollUp && mtMenu >= menuHeight) {            
                    if (startHiddenMenu && !scrollUp) {            
                        $('#main-menu div').css('margin-top', -menuHeight + 'px'); 
                        // $('#main-menu div').css('margin-top', mtMenu - 2 + 'px');
                    }                       
                } else {
                    $('body').removeClass('logo-fixed');
                    $('main').css('padding-top','0px');
                    $('#main-menu div').css('margin-top', '0px');            
                }

                

                if (scrollUp && startHiddenMenu && mtMenu < 0) {            
                    $('#main-menu div').css('margin-top', mtMenu + 4 + 'px');
                } else if(!scrollUp && startHiddenMenu && mtMenu < 0) {            
                    // $('#main-menu div').css('margin-top', mtMenu - 2 + 'px');
                }

                lastScrollTop = scrollTop;


                //console.log(scrollTop);
                
            });
        }



        /* 
        * -------------
        */
        // $('#eventosCarrusel ul li a').on('click', function(e) {
        //     var target = $(this).attr('href');
        //     e.preventDefault();

        //     $('#eventosCarrusel li, #eventosCarrusel div').removeClass('on');
        //     $(this).parent().addClass('on');
        //     $(target).addClass('on');
        // });
        /* 
        * -------------
        */

        $('#hamb, .divMenu').on('click', function(ev){            
            ev.preventDefault();
            var $body = $('body');
            $('header.full').css('margin-top','0px');
            $('#main-menu div').css({'margin-top': '0px','top':'0px'});
            $('main.grid').css('padding-top', '0px');

            if ($body.hasClass('swipe-menu')) {
                $body.removeClass('swipe-menu');
                
            } else {
                $body.addClass('swipe-menu');

                
            }

        });      

        /* 
        * -------------
        */

        
        $(".mostrarpass").on('click', function(e) {
            e.preventDefault();
            var $input = $(this).parent().find('.showpass');
            // var change = $(this).is(":checked") ? "text" : "password";
            var checked = $(this).hasClass("checked");
            var change = !checked ? "text" : "password";
            var rep = $("<input type='" + change + "' />")
                .attr("id", $input.attr("id"))
                .attr("name", $input.attr("name"))
                .attr('class', $input.attr('class'))
                .data('id', $input.attr("id"))
                .val($input.val())
                .insertBefore($input);
            $input.remove();
            $input = rep;
            if (checked) {
                $(this).removeClass("checked");
            } else {
                $(this).addClass("checked");
            }
         });



        /* 
        * ------tabs navigation-------
        */
        $('.dynTabs .horiz a').on('click', function(e) {
            e.preventDefault();
            var $root = $(this).closest('.dynTabs');
            var hrefTarget = $(this).attr('href').slice(1);
            $root.find('.horiz a.on').removeClass('on');
            $root.find('.blkTab.on').removeClass('on');
            $(this).addClass('on');
            $('#'+hrefTarget).addClass('on');

            $('html, body').animate({
                scrollTop: $('#'+hrefTarget).offset().top-200
            }, 200);
            window.location= window.location.href.replace(window.location.hash, '') + '#' +hrefTarget;    
        });

        if(window.location.hash.indexOf("#")>-1){
            $('.dynTabs .horiz a[href="'+window.location.hash+'"]').click();
        }
              


        /* 
        * ------cookies-------
        */



        // Acepta cookies
        var aceptacionGalleta = function() {
            if ($.cookie('aviso_cookies') != "true") {
                $('#LB_cookies').show();
                $.cookie('aviso_cookies', true, { path: '/' });            
            }    
        }();

        /* 
        * ------no sidebar-------
        */

      // if ( $("main").children("div").hasClass("conteTienda") ){
      // $("aside.cell-320").hide();
      //      //console.log("no sidebar");
      // }else{
      //      //console.log("si sidebar");
      // }

      /*
      ------no sidebar-------
    */

        /* 
        * -------------
        */


        // Lightbox
        var openLightBox = function(elem, callback) {
            if (!$('#fade').length) {
                $('body').append('<div id="fade"></div>');
                $("#fade").closeLightBox();
            }

            $(elem).fadeIn().center();
            $('#fade').fadeIn();            
            if(callback) {callback();}   
        };


        jQuery.fn.closeLightBox = function() {
            this.on('click', function(e) {          
                e.preventDefault();
                $(this).slideToggle(1000).hide(300);        
            });
        }; 
         //$(".ico_close, #fade").closeLightBox();
        //var fueraCookie;

        jQuery.fn.closeLightBoxCookies = function() {
           fueraCookie = setInterval(function(){
                $('#LB_cookies').hide(4000);
            },25000);
        }; 

        $('#LB_cookies').closeLightBoxCookies();

        jQuery.fn.closeLightBoxPreguntas = function() {
            this.on('click', function(e) {          
                e.preventDefault();
                $('.ico_close').hide();
                $('#contePregunta').children().empty();
                $('#contePregunta').append('<div class="loading"><div>');
                $('.pregunta-form').submit();
                $('.pregunta-btn').attr("disabled", true);          
            });
        }; 

        $("#preguntas-lbox .ico_close, #fade").closeLightBoxPreguntas();

          jQuery.fn.closeLightBoxRespuestas = function() {
            this.on('click', function(e) {          
                e.preventDefault();
                $('.ico_close').hide();
                $('#conteRespuesta').children().empty();
                $('#conteRespuesta').append('<div class="loading"><div>');
                $('.respuesta-form').submit();
                $('.respuesta-btn').attr("disabled", true);          
            });
        }; 
        
        $("#respuestas-lbox .ico_close, #fade").closeLightBoxRespuestas();

        $(".closeIncioSesion").on('click',function(){
            $("#fade , #inicio-sesion-lbox").hide();
        });
        // cerrar compartir por Mail
        $(".ico_close").on('click',function(){
            $("#fade , #mail-lbox").hide();
            e.preventDefault();
        });




        // tool para centrar contenido
        jQuery.fn.center = function () {       
            this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop()) + "px");
            this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) +  $(window).scrollLeft()) + "px");
            return this;
        };

        // spinner
        var openSpinner = function() {
            if (!$('#spinnerInline').length) {
                $('#spinner_show').append('<div id="spinnerInline"></div>');            
            }       
            $('#spinnerInline').fadeIn();
        };

        // Muestra lightbox de persona de contacto
        $('#terminos-btn').on('click', function(e) {
            e.preventDefault();
            openLightBox('#terminos-lbox');
        });

        // Muestra lightbox de inicio sesion
      /*  $('.pedir-cita-off, .btn-login-lbox').on('click', function(e) {
            e.preventDefault();
            openLightBox('#inicio-sesion-lbox');
        });*/


        // Muestra lightbox de inicio sesion
        $('.ico-mail-b').on('click', function(e) {
            e.preventDefault();
            envioEventoRedSocial('mail');
            openLightBox('#mail-lbox');
        });

        // Muestra lightbox de social
        $('.ico-facebook-b, .ico-twitter-b, .ico-google-b').on('click', function(e) {            
            if ($(this).hasClass('ico-facebook-b')) envioEventoRedSocial('facebook');
            if ($(this).hasClass('ico-twitter-b')) envioEventoRedSocial('twitter');
            if ($(this).hasClass('ico-google-b')) envioEventoRedSocial('google');
        });

        $('.ico-imprimir-b').on('click', function(e) {
           envioEventoRedSocial('imprimir'); 
           window.print();
        });

        $('.ico-facebook-header, .ico-twitter-header').on('click', function(e) {
            if ($(this).hasClass('ico-facebook-header')) envioEventoRedSocial('facebook');
            if ($(this).hasClass('ico-twitter-header')) envioEventoRedSocial('twitter');
        });




        /*
        * Buscador
        */
        // clase focus es para cambiar color fondo
        $(".buscador input").on('focus', function() {
            $(this).parent().addClass("focus");
        });
        $(".buscador input").on('blur', function() {
            $(this).parent().removeClass("focus");
        });

        // clase show-button muestra/oculta boton y aumenta/disminuy tamaño input buscador
        $("#buscador-general").on('focus keyup', function() {     
            $("#buscador-general").closest('.buscador').addClass("show-button");
        }); 

        $('body').on('click', function(ev) {        
            if (ev.target.id !== 'buscador-general' && !$(ev.target).hasClass('itemSuggest')) {
                $("#buscador-general").closest('.buscador').removeClass("show-button");
            };
        });

        if ($('#buscador-general').length>0) {
            //$('#buscador-general').jsonSuggest({url: $('#buscador-general').data('url')+$('#buscador-general').val(), maxResults: 5, minCharacters:3});
        }
        if ($('#buscador-seccion').length>0) {
            $('#buscador-seccion').jsonSuggest({url: $('#buscador-seccion').data('url'), maxResults: 5, minCharacters:3});
        }


         $('#buscador-btn').on('click', function(e) {     
            var busqueda = $('#buscador-general').val();
            if (busqueda) {
                window.location= $('#buscador-btn').data("url") + busqueda;    
            }   
        }); 

        $(document).keyup(function (e) {            
            if ($("#buscador-general:focus") && (e.keyCode === 13)) {
                var busqueda = $('#buscador-general').val();
                if (busqueda) {
                    window.location= $('#buscador-btn').data("url") + busqueda;    
                }   
            }
        });

        dmedicina.buscar = function() {            
            var busqueda = $('#buscador-general').val();
            if (busqueda) {
                window.location= $('#buscador-btn').data("url") + busqueda;    
            }
        };

        /*
        * lightSlider carrusel con thumbs
        */
        if ($('.lightSliderWrap > ul').length>0) {
            $('.lightSliderWrap > ul').lightSlider({
                gallery: true,
                item: 1,
                loop:true,
                slideMargin: 0,
                thumbItem: 9,
                onSliderLoad: function ($el) {
                    $el.show();
                }
            });
        }


        /*
        * slider footer
        */
        if ($('footer .logos-grupo').length>0) {
            slideFooter();
        }

        function slideFooter() {
            var itemWidth = 190;
            var pos = 0;
            var elemsPaso = 6;
            var $contentItems = $('footer .logos-grupo > div > div');
            var $contentItemsList = $('footer .logos-grupo .horiz');
            var $prevBtn =  $('.prev-brand');
            var $nextBtn =  $('.next-brand');            
            var $bothBtn =  $('.prev-brand, .next-brand');

            var itemsLength = $contentItems.find('a').length;
            var contentItemsListWidth = itemsLength * itemWidth;
            $contentItemsList.css('width',contentItemsListWidth);

            if (itemsLength <= elemsPaso) {
                $nextBtn.addClass('off');
            }

            $($bothBtn).on('click', function(e) {
                e.preventDefault();

                if ($(this).hasClass('prev-brand')) {
                    if (pos>0) pos--;
                } else {                    
                    if ((pos+1)*elemsPaso<=itemsLength) pos++;
                }

                if (pos<1) {
                    $prevBtn.addClass('off');
                } else {
                    $prevBtn.removeClass('off');
                }

                if ((pos+1)*elemsPaso>=itemsLength) {
                    $nextBtn.addClass('off');
                } else {
                    $nextBtn.removeClass('off');
                }

                $contentItems.attr('data-pos', pos);
                var movex = pos * itemWidth * elemsPaso;

                if (window.atob) { // detect ie8/9
                    $contentItemsList.css('transform','translate3d(-' + movex + 'px,0,0)');
                } else {
                    $contentItemsList.css('margin-left', '-' + movex + 'px');
                }
                
            });
        }        

        

        /* 
        * VALIDACION DE FORMULARIO
        */
        function isEqual(str1, str2) {
            var auxFlag = false;
            auxFlag = (str1 === str2) ? true : false;
            return auxFlag;
        }


        var validarFormulario = {
            formOk      : true,
            passRegxp   : /(?![.\n])(?=.*[A-Z0-9]).*$/, //Alguna letra y digito-->/(?=^.{6,8}$)(?![.\n])(?=.*\d)(?=.*[A-Z]).*$/
            emailRegxp  : /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            showError   : function($elem, txt) {
                this.formOk = false; 
                $elem.addClass('errorField');
                // $elem.after('<div class="errorMessage">' + txt + '</div>');
                if ($elem.attr('type')!=='checkbox') {
                    $elem.parent().append('<div class="errorMessage">' + txt + '</div>'); 
                }         
            },
            init : function(elem) {
                $('.errorMessage').remove();
                $('.errorField').removeClass('errorField');
                
                this.formOk = true;
                var that = this;                  

                $(elem).find('input[type=text], input[type=password], input[type=checkbox], textarea, select').not('.disabled').each(function() {                          
                    var $field = $(this);                
                    var fieldValue = $.trim($field.val());                
                    var test = $field.hasClass('required') || fieldValue !== '';              

                    if ($field.attr('type') === 'checkbox' && $field.hasClass('required') && !$field.is(':checked')) {                    
                        validarFormulario.showError($field, 'Campo requerido');    
                    } else if ($field.hasClass('required') && fieldValue === '') {                    
                        validarFormulario.showError($field, 'Campo requerido');   
                    } else if ($field.hasClass('isPassword')  && !that.passRegxp.test(fieldValue)) {                     
                        validarFormulario.showError($field, 'Formato de contraseña erróneo');                               
                    } else if ($field.hasClass('isEmail')  && !that.emailRegxp.test(fieldValue.toLowerCase()) && test) {                   
                        validarFormulario.showError($field, 'Formato de correo erróneo');
                    } else if ($field.hasClass('required') && $field.hasClass('selectOne') && !$field.parent().hasClass("disabled") && fieldValue === '-1') {
                        validarFormulario.showError($field.parent(), 'Campo requerido');
                    }
                });

                return that.formOk;
            }
        }



        $('.login-btn').on('click', function(e) {
            e.preventDefault();
            var formOk = validarFormulario.init('.login-form');        
            if (!formOk) {
                console.log("MAL!!");
            } else {
                $('.login-form').submit();
            }
        });

        $('.newsletter-btn').on('click', function(e) {
            e.preventDefault();
            var formOk = validarFormulario.init('.newsletter-form');        
            if (!formOk) {
                console.log("MAL!!");
            } else {
                envioSC('<Newsletter_diaria:' + s.prop1 + '>');
                $('.newsletter-form').submit();
                $('.newsletter-btn').attr("disabled", true);
            }
        });

        $('.pregunta-btn').on('click', function(e) {
            e.preventDefault();
            var formOk = validarFormulario.init('.pregunta-form');        
            if (!formOk) {
                console.log("MAL!!");
            } else {
            	openLightBox('#preguntas-lbox');
            }
        });

        $('.respuesta-btn').on('click', function(e) {
            e.preventDefault();
            var formOk = validarFormulario.init('.respuesta-form');        
            if (!formOk) {
                console.log("MAL!!");
            } else {
                openLightBox('#respuestas-lbox');
            }
        });

        $('.sendmail-btn').on('click', function(e) {        
            e.preventDefault();
            var formOk = validarFormulario.init('.sendmail-form');        
            if (!formOk) {
                console.log("MAL!!");
            } else {
                console.log("BIEN!!");
                $('.sendmail-form').submit();
                $('.sendmail-btn').attr("disabled", true);
            }
        });


        $('.registro-btn').on('click', function(e) {
            var formOk = validarFormulario.init('.registro-form');        

            var checkedPublicidadAlDia = $('input#publicidad_al_dia').is(':checked') ? 0 : 1;
            if(checkedPublicidadAlDia)
                $('input.publicidad_al_dia').attr('checked', 'checked');
            else
                $('input.publicidad_al_dia').removeAttr('checked');


            var checkedPublicidadComunicaciones = $('input#publicidad_comunicaciones').is(':checked') ? 0 : 1;
            if(checkedPublicidadComunicaciones)
                $('input.publicidad_comunicaciones').attr('checked', 'checked');
            else
                $('input.publicidad_comunicaciones').removeAttr('checked');

            e.preventDefault();

            var $pass1 = $('.pass-reg');
            var $pass2 = $('.pass-repeat-reg');

            if($('.pass-reg').length>0){
                if ($pass1.val().length>0 && !isEqual($pass1.val(), $pass2.val())) {
                    $pass1.addClass('errorField');
                    $pass2.addClass('errorField');

                    if (!$pass1.parent().find('.errorMessage').length) {
                        $pass1.parent().append('<div class="errorMessage">Las contraseñas no coinciden</div>'); 
                    }
                    if (!$pass2.parent().find('.errorMessage').length) {
                        $pass2.parent().append('<div class="errorMessage">Las contraseñas no coinciden</div>'); 
                    }

                    formOk = false;
                }
            }
            
            if (!formOk) {
                console.log("MAL!!");
            } else {
                $('.registro-form').submit();
                $('.registro-btn').attr("disabled", true);
            }
        });

        $('.recuperar-pass-btn').on('click', function(e) {
            var formOk = validarFormulario.init('.recuperar-pass-form');        
            e.preventDefault();

            var $pass1 = $('.pass-reg');
            var $pass2 = $('.pass-repeat-reg');

            if($('.pass-reg').length>0){
                if ($pass1.val().length>0 && !isEqual($pass1.val(), $pass2.val())) {
                    $pass1.addClass('errorField');
                    $pass2.addClass('errorField');

                    if (!$pass1.parent().find('.errorMessage').length) {
                        $pass1.parent().append('<div class="errorMessage">Las contraseñas no coinciden</div>'); 
                    }
                    if (!$pass2.parent().find('.errorMessage').length) {
                        $pass2.parent().append('<div class="errorMessage">Las contraseñas no coinciden</div>'); 
                    }

                    formOk = false;
                }
            }
            
            if (!formOk) {
                console.log("MAL!!");
            } else {
                $('.recuperar-pass-form').submit();
                $('.recuperar-pass-btn').attr("disabled", true);
            }
        });

         $('.guardar-datos-btn').on('click', function(e) {
            var formOk = validarFormulario.init('.edit-profile-form');        
            e.preventDefault();

            var $pass1 = $('.pass-reg');
            var $pass2 = $('.pass-repeat-reg');

            if ($pass1.val().length>0 && !isEqual($pass1.val(), $pass2.val())) {
                $pass1.addClass('errorField');
                $pass2.addClass('errorField');

                if (!$pass1.parent().find('.errorMessage').length) {
                    $pass1.parent().append('<div class="errorMessage">Las contraseñas no coinciden</div>'); 
                }
                if (!$pass2.parent().find('.errorMessage').length) {
                    $pass2.parent().append('<div class="errorMessage">Las contraseñas no coinciden</div>'); 
                }

                formOk = false;
            }

            $('.options_publicidad input[type=checkbox]').each(function(){
                if($(this).is(':checked'))
                    $(this).val('1');
                else
                    $(this).val('0');
            });

            if (!formOk) {
                console.log("MAL!!");
            } else {
                $('.edit-profile-form').submit();
                $('.guardar-datos-btn').attr("disabled", true);
            }
        });

        $('#disable_account').on('click', function(e){
            e.preventDefault();
            openLightBox('#disable-account-lbox');
        });

        $('#disable-account-lbox .ico_close, #disable-account-lbox .close').on('click', function(e){
            e.preventDefault();
             $('#disable-account-lbox').fadeOut();
             $('#fade').fadeOut();
        });

        $('#eliminar-perfil-btn').on('click', function(e){
            e.preventDefault();
            $('.eliminar-perfil-form').submit();
        });


        /* 
        * swipeCarouselLite
        */


        // Polyfill Object.create
        if ( typeof Object.create !== 'function' ) {
            Object.create = function (o) {
                function F() {}
                F.prototype = o;
                return new F();
            };
        }

        // Create a plugin based on a defined object
        $.plugin = function( name, object ) {
          $.fn[name] = function( options ) {
            return this.each(function() {
              if ( ! $.data( this, name ) ) {
                $.data( this, name, Object.create(object).init( 
                options, this ) );
              }
            });
          };
        };

        // document.body.addEventListener('touchmove', function(event) {
        //     event.preventDefault();
        // }, false); 
        /* 
        * jQuery plugin swipeCarouselLite
        * Basado en https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
        */
         var swipeCarouselLite = {
            touchstartx: undefined,
            touchmovex: undefined,
            movex: undefined,
            index: 0,
            longTouch: undefined,
            init : function(options, elem) {
                // this.options = $.extend( {}, this.options, options );
                this.elem   = elem;
                //elementTouch = $('div.pickgradient');
                this.$elem  = $(elem);
                this.$holder = $(elem).children(".holder");
                this.$images = $(elem).find("img");
                this.slideWidth = $(elem).width();
                this.itemsNumber = this.$holder.children().length;
                this.$holder.css('width',100*this.itemsNumber+'%');
                this.$images.css('width', this.slideWidth);         

                this.bindUIEvents();
                return this;
            },
            bindUIEvents: function() {
                var that = this;
                this.$holder.on("touchstart", function(event) {
                    //event.preventDefault();
                    that.start(event);
                });
                this.$holder.on("touchmove", function(event) {
                    //event.preventDefault();
                    that.move(event);
                });
                this.$holder.on("touchend", function(event) {
                    //event.preventDefault();
                    that.end(event);
                });
            },
            start: function(event) {
                var that = this;
                this.longTouch = false;
                setTimeout(function() {
                    that.longTouch = true;
                }, 150);
                this.touchstartx =  event.originalEvent.touches[0].pageX;
                $('.animate').removeClass('animate');
            },
            move: function(event) {            
                this.touchmovex =  event.originalEvent.touches[0].pageX;
                this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
                if (this.movex < this.slideWidth*this.itemsNumber) {
                    this.$holder.css('transform','translate3d(-' + this.movex + 'px,0,0)');
                }
            },
            end: function(event) {
              var absMove = Math.abs(this.index*this.slideWidth - this.movex);
              if (absMove > this.slideWidth/2 && this.longTouch === true) {
                if (this.movex > this.index*this.slideWidth && this.index < this.itemsNumber-1) {
                    this.index++;
                } else if (this.movex < this.index*this.slideWidth && this.index > 0) {
                    this.index--;
                }
              }      
              this.$holder.addClass('animate').css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
            }
        }
        $.plugin('swipeCarouselLite', swipeCarouselLite);

        //alert(absMove);
        /***********************
        * * *  IE  * * *
        ************************/
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0){
            if(ua.indexOf("MSIE 10.0") || ua.indexOf("MSIE 9.0") || ua.indexOf("MSIE 8.0")){
                if($('.nav-tab-a ul li').length>0){
                    $('.nav-tab-a ul li').width($('.nav-tab-a ul').width()/$('.nav-tab-a ul li').length);
                }

                if($('.nav-tab > ul li').length>0){
                    $('.nav-tab > ul li').width($('.nav-tab > ul').width()/$('.nav-tab > ul li').length);
                }
            }
        }

// $(window).on("touchstart", function(ev) {
//     var e = ev.originalEvent;
//     console.log(swipeCarouselLite.start);
// });
        /***********************
        * * *  RESPONSIVE  * * *
        ************************/

        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                e.preventDefault();
                if (matchMedia('(max-width: 640px)').matches) {
                    swipeCarouselLite.init({},$('#eventosCarrusel > .slider'));
                } else {
                    $('#eventosCarrusel .holder').css('width','auto');
                    $('#eventosCarrusel .holder img').css('width','auto');
                }
            }, 200);
        });

        //1180px 768px 480px
        if (matchMedia('(max-width: 640px)').matches) {

            // sesion
            $('#cab-user').on('click', function() { 
                var urlInicio, urlRegClose, dataHtml;
                urlRegClose = $('#sesion li:last-child a').attr('href');
                urlInicio = $('#sesion li:first-child a').attr('href');
                 // if ($('#sesion-name').length) {
                 //     dataHtml = $('<div id="acceso_div" class="lbox"><ul><li><a class="btn" href="/user">Mi cuenta</a></li><li><a href="/user/logout" class="btn" id="sesion-close">Cerrar sesión</a></li></ul></div>');
                 // }else {
                                 
                 //     dataHtml = $('<div id="acceso_div" class="lbox"><ul><li><a href="' + urlInicio + '" class="btn">Iniciar sesión</a></li><li><a href="' + urlRegClose + '" class="btn">Registro</a></li></ul></div>');
                 // }
                window.location.href=urlInicio;

                // if (!$('#acceso_div').length) {
                //     $('body').append(dataHtml);
                // }
                // if (!$('#fade').length) {
                //     $('body').append('<div id="fade"></div>');
                //     $("#fade").closeLightBox();
                // }

                // $('#acceso_div').addClass('on');
                // $('#fade').fadeIn();
                // $('#acceso_div').fadeIn();
                // $('#fade').on('click',function(){
                //    $('#acceso_div , #fade').hide(100); 
                // });
            });


            // whatsapp
            if ($('.ico-imprimir-b').length) {
                $(".social-bar > ul").append('<li><a href="#" class="ico-whatsapp-b"><span></span></a></li>');
                $('.ico-whatsapp-b').attr('href','whatsapp://send?text=' + window.location.href);
                $('.ico-imprimir-b').parent().hide();
            }

            //swipeCarouselLite
            $('#eventosCarrusel > .slider').swipeCarouselLite();

            //nav-tab
            if ($('.nav-tab:not(.not-grow)').length) {
                buildTabMenu();
            }

            //nav-tab-horiz
            if ($('.dynTabs').length) {
                buildTabHorizMenu();
            }

            responsiveAds();
            borrarCaruselhome();
            //carrusel();
            //destacado();
            
            

        }
        // fin media jQuery

        //responsive ads


        function responsiveAds() {
            var banners = $('aside.cell-320 .banner-b, aside.cell-860 .publi, aside.cell-860 .pan-bottom');
            //var bannersPan = $('aside.cell-860 .publi, aside.cell-860 .pan-bottom');
            var hooksMain = $('main .cell-860 .mod-photo-gallery, .cell-320 .block-comparador, main .cell-860 > .mod-photo-gallery, main .cell-860 > .blk-double, main .cell-860 > .blk-ab, .cell-320 .newsletter').not('.destacamos');
            var i;
            var l = banners.length;
            var lHooks = hooksMain.length;
            ancho = $( window ).width();
            
            for (i=0; i < l ; i++) {    
                $(banners[i]).insertAfter($(hooksMain[i]));
            }

            $('.block-comparador').appendTo('article.noticia').insertAfter('section.blk-detail');
            $(banners[0]).appendTo('article.noticia').insertAfter('div.tags-box');

            if($('article.noticia').length > 0){
                $(banners[0]).appendTo('div.cell-860').insertAfter('article.noticia section.block-comparador');
            }
            if($('article.noticia section.blk-detail').length > 0){
                $(banners[0]).appendTo('div.cell-860 article.noticia section.blk-detail').insertAfter('div.cell-860 article.noticia section.blk-detail p:nth-child(2)');
                //$('.blk-detail div.banner-b').addClass('bannerNoti');
                if (ancho < 372){
                    $('.blk-detail div.banner-b').addClass('bannerNoti');
                }
                $(banners[1]).appendTo('div.cell-860 article.noticia').insertAfter('div.cell-860 article.noticia .blk-news');
            }
            if($('article ul.indice').length > 0){
                if($('section.mod-list').length > 2){
                    $(banners[0]).appendTo('div.cell-860 article').insertAfter('article section.mod-list:nth(2)');
                    $(banners[1]).appendTo('div.cell-860 article').insertAfter('article section.mod-list:nth(5)');
                    $(banners[2]).appendTo('div.cell-860 article').insertAfter('article section.mod-list:nth(8)');
                    $('section.block-comparador').appendTo('div.cell-860 article').insertAfter('article section.mod-list:nth(12)');
                }
                
                
            }
            if($('.mod-photo-gallery').length > 0){
                $('.block-comparador').appendTo('div.cell-860').insertAfter(banners[0]);
                $(banners[1]).appendTo('div.cell-860').insertAfter('.mod-list');
                $('.newsletter').insertAfter('.publi');
                $(banners[2]).insertAfter('.newsletter');
                $('.pan-bottom').appendTo('div.cell-860').insertAfter(hooksMain[2]);
                
                $(hooksMain[5]).last().remove();
                $(hooksMain[6]).last().remove();
                $(banners[2]).last().remove();
            }
            if($('article.dynTabs').length > 0){
                $('.block-comparador').appendTo('div.cell-860').insertAfter('article.dynTabs');
                $(banners[0]).appendTo('div.cell-860').insertAfter('section.block-comparador');
                $('.publi').appendTo('div.cell-860').insertAfter(hooksMain[0]);
                $(hooksMain[3]).appendTo('div.cell-860').insertAfter(hooksMain[1]);
                $(hooksMain[4]).appendTo('div.cell-860').insertAfter(banners[1]);
                $(hooksMain[5]).appendTo('div.cell-860').insertAfter(hooksMain[4]);
            }

            $('.bannerFooter').remove();
            //console.log(banners[3]);
             //console.log(hooksMain);
        } 
        // borrarCaruselhomeEscritorio();
        
        //borrar contenido de portada responsive
        function borrarCaruselhome(){
            if($('.portada').length){
                $('.portada').remove();
                //console.log('portada oculta');
            }
        }

        function buildTabMenu() {
            var $selectItem = $('.nav-tab .on');
            var dataHtml = $('<div class="select-item"><strong>' + $selectItem.html() + '</strong><span class="show-menu">Más</span></div>');
            $('.nav-tab').on('click','.show-menu',function() {

                if ($(this).hasClass('on')) {
                    $('.show-menu').removeClass('on');
                    $('.menu-tab-resp').removeClass('on');
                } else {
                    $(this).addClass('on');
                    $('.menu-tab-resp').addClass('on');                    
                }
            });
            $('.nav-tab').append(dataHtml);
            $( ".nav-tab > .horiz" ).clone().removeClass('horiz').addClass('menu-tab-resp ul').appendTo('.select-item');
            $('.nav-tab > .horiz').hide();
        }

        // $("p").on("swipe",function(){
        //     $("span").text("Swipe detected!");
        // });

        
        // function carrusel(){
        // //alert('funciona');
        
        // // $("div.slider").on("swipeleft",function(){
        // //     alert("You swiped left!");
        // // });

        // }

        function buildTabHorizMenu() {
            var $holder = $('.dynTabs .nav-tab-a .horiz');
            var $holderFather = $('.dynTabs .nav-tab-a');
            $holderFather.append('<span class="leftTab">&nbsp;</span>');
            $holderFather.append('<span class="rightTab">&nbsp;</span>');
            $btnLeft = $('.dynTabs .leftTab');
            $btnRight = $('.dynTabs .rightTab');

            $btnLeft.on("touchstart", function(e) {
                e.preventDefault();
                action.moveLeft(e);
            }).on("touchend", function(e) {
                action.moveEnd(e);
            });
            $btnRight.on("touchstart", function(e) {
                e.preventDefault();
                action.moveRight(e);
            }).on("touchend", function(e) {
                action.moveEnd(e);
            });

            $holder.on("touchstart", function(e) {                
                action.start(e);
            }).on("touchmove", function(e) {
                e.preventDefault();
                action.move(e);
            }).on("touchend", function(e) {
                e.preventDefault;
                action.end(e);
            });

            var action = {
                step:30,
                index:0,
                touchstartx: 0,
                touchmovex: 0,
                movex: 0,
                longTouch: 0,
                endLimit: $holder.width()-$holderFather.width()+80,
                moveEnd : function() {
                    window.clearInterval(this.interval);
                },
                moveRight : function() {
                    var that = this;                    
                    this.interval = window.setInterval(function(){
                        that.index = that.index + that.step;
                        if (that.index > that.endLimit) {
                            that.index=that.endLimit;
                        }
                        $holder.css('transform','translate3d(-' + that.index + 'px,0,0)');
                    }, 100);
                    
                },
                moveLeft : function() {
                    var that = this;                    
                    this.interval = window.setInterval(function(){
                        that.index = that.index - that.step;
                        if (that.index < 0) {
                            that.index=0
                        }                        
                        $holder.css('transform','translate3d(-' + that.index + 'px,0,0)');
                    }, 100);

                },
                start: function(e) {
                    if (this.index < 0) {
                        this.index=0
                    } else if (this.index > this.endLimit) {
                        this.index=this.endLimit;
                    }

                    var that = this;
                    this.longTouch = false;
                    setTimeout(function() {
                        that.longTouch = true;
                    }, 250);
                    this.touchstartx =  e.originalEvent.touches[0].pageX;
                     console.log($holder.width()-$holderFather.width());
                    //$('.animate').removeClass('animate');
                },
                move: function(e) {            
                    this.touchmovex =  e.originalEvent.touches[0].pageX;
                    // this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
                    this.movex = this.index + (this.touchstartx - this.touchmovex);
                    // console.log(this.endLimit);
                    if (this.movex > 0 && this.movex < this.endLimit) {
                        // console.log(this.movex);
                        $holder.css('transform','translate3d(-' + this.movex + 'px,0,0)');
                    }
                    // this.index = this.movex;
                    // console.log(this.movex);
                },
                end: function(e) {
                    this.index = this.movex;
                }




            }   

        }

        /*****************************
        * * *  fin RESPONSIVE  * * *
        ******************************/



    });
})(jQuery);



/*jshint curly: true, eqeqeq: true, undef: true, devel: true, browser: true */
/*global jQuery */
 
/**
 * Turn a text box into an auto suggest box which search's and 
 * displays results specified in a JSON string
 * 
 *
 * @name jsonSuggest
 * @type jQuery plugin
 * @author Tom Coote (tomcoote.co.uk)
 * @version 2.0.1
 * @copyright Copyright 2011 Tom Coote
 * @license released under the BSD (3-clause) licences
 * 
 * @param settings <object>;
 *          url :               [default ''] A URL that will return a JSON response. Called via $.getJSON, it is passed a 
 *                               data dictionary containing the user typed search phrase. It must return a JSON string that
 *                               represents the array of results to display.
 *          data :              [default []]An array or JSON string representation of an array of data to search through.
 *                               Example of the array format is as follows:
                                    [
                                        {
                                            id: 1,
                                            text: 'Thomas',
                                            image: 'img/avator1.jpg',   // optional
                                            extra: 'www.thomas.com' // optional
                                        },
                                        {
                                            id: 2,
                                            text: 'Frederic',
                                            image: 'img/avator2.jpg',   // optional
                                            extra: 'www.freddy.com' // optional
                                        },
                                        {
                                            id: 2,
                                            text: 'James',
                                            image: 'img/avator2.jpg',   // optional
                                            extra: 'www.james.com'  // optional
                                        }
                                    ]
 *          minCharacters :     [default 1] Number of characters that the input should accept before running a search.
 *          maxResults :        [default undefined] If set then no more results than this number will be found.
 *          wildCard :          [default ''] A character to be used as a match all wildcard when searching. Leaving empty 
 *                               will mean results are matched inside strings but if a wildCard is present then results are 
 *                               matched from the beginning of strings.
 *          caseSensitive :     [default false] True if the filter search's are to be case sensitive.
 *          notCharacter :      [default !] The character to use at the start of any search text to specify that the results 
 *                               should NOT contain the following text.
 *          maxHeight :         [default 350] This is the maximum height that the results box can reach before scroll bars 
 *                               are shown instead of getting taller.   
 *          width:              [default undefined] If set this will become the width of the results box else the box will be 
 *                               the same width as the input.
 *          highlightMatches :  [default true] This will add strong tags around the text that matches the search text in each result.
 *          onSelect :          [default undefined] Function that gets called once a result has been selected, gets passed in 
 *                               the object version of the result as specified in the JSON data.
 *          
 */

(function($) {

    $.fn.jsonSuggest = function(settings) {
        var defaults = {  
                url: '',
                minCharacters: 1,
                maxResults: undefined,
                wildCard: '',
                caseSensitive: false,
                notCharacter: '!',
                maxHeight: 350,
                highlightMatches: true,
                onSelect: undefined,
                width: undefined
            },
            getJSONTimeout;
        settings = $.extend(defaults, settings);  
    
        return this.each(function() {
            /**
            * Escape some text so that it can be used inside a regular expression
            * without implying regular expression rules iself. 
            */
            function regexEscape(txt, omit) {
                var specials = ['/', '.', '*', '+', '?', '|',
                                '(', ')', '[', ']', '{', '}', '\\'];
                
                if (omit) {
                    for (var i = 0; i < specials.length; i++) {
                        if (specials[i] === omit) { specials.splice(i,1); }
                    }
                }
                
                var escapePatt = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
                return txt.replace(escapePatt, '\\$1');
            }
            
            var obj = $(this),
                wildCardPatt = new RegExp(regexEscape(settings.wildCard || ''),'g'),
                results = $('<ul />'),
                currentSelection, pageX, pageY;
            
            /**
            * When an item has been selected then update the input box,
            * hide the results again and if set, call the onSelect function.
            */
            function selectResultItem(item) {                
                obj.val(item.text);
                $(results).html('').removeClass('on');
                
                if (typeof settings.onSelect === 'function') {
                    settings.onSelect(item);
                }
            }

            /**
            * Used to get rid of the hover class on all result item elements in the
            * current set of results and add it only to the given element. We also
            * need to set the current selection to the given element here.
            */
            function setHoverClass(el) {
                $('li a', results).removeClass('ui-state-hover');
                if (el) {
                    $('a', el).addClass('ui-state-hover');
                }
                
                currentSelection = el;
            }
            
            /**
            * Build the results HTML based on an array of objects that matched
            * the search criteria, highlight the matches if that feature is turned 
            * on in the settings.
            */
            function buildResults(resultObjects, filterTxt) {
                filterTxt = '(' + filterTxt + ')';
            
                var bOddRow = true, i, iFound = 0,
                    filterPatt = settings.caseSensitive ? new RegExp(filterTxt, 'g') : new RegExp(filterTxt, 'ig');
                    
                $(results).html('').removeClass('on');
                
                for (i = 0; i < resultObjects.length; i += 1) {
                    var item = $('<li />'),
                        //text = resultObjects[i].text;
                        text = resultObjects[i].value;
                        link = resultObjects[i].link;

                    if (settings.highlightMatches === true) {
                        text = text.replace(filterPatt, '<strong>$1</strong>');
                    }
                    
                    $(item).append('<a href="'  + link + '">' + text + '</a>');
                    
                    // if (typeof resultObjects[i].image === 'string') {
                    //     $('>a', item).prepend('<img src="' + resultObjects[i].image + '" />');
                    // }
                    
                    // if (typeof resultObjects[i].extra === 'string') {
                    //     $('>a', item).append('<small>' + resultObjects[i].extra + '</small>');
                    // }
                    
                    $(item).addClass('itemSuggest').attr('role', 'menuitem').
                        click((function(n) { return function() {
                            selectResultItem(resultObjects[n]);                     
                        };})(i)).
                        mouseover((function(el) { return function() { 
                            setHoverClass(el); 
                        };})(item));
                    
                    $(results).append(item);
                    
                    bOddRow = !bOddRow;
                    
                    iFound += 1;
                    if (typeof settings.maxResults === 'number' && iFound >= settings.maxResults) {
                        break;
                    }
                }

                if($('#buscador-general').length>0 && $('#buscador-general').val().length>0)
                    $(item).parent().append('<li><a href="'+ $('#buscador-btn').data("url") + jQuery( ".show-button #buscador-general" ).val() + '">Ver más resultados</a></li>');
                
                if ($('li', results).length > 0) {
                    currentSelection = undefined;
                    // $(results).show().css('height', 'auto');
                    $(results).addClass('on').css('height', 'auto');
                    
                    if ($(results).height() > settings.maxHeight) {
                        $(results).css({'overflow': 'auto', 'height': settings.maxHeight + 'px'});
                    }
                }
            }
            
            /**
            * Prepare the search data based on the settings for this plugin,
            * run a match against each item in the possible results and display any 
            * results on the page allowing selection by the user.
            */
            function runSuggest(e) {    
                if (this.value.length < settings.minCharacters) {
                    $(results).html('').removeClass('on');
                    return false;
                }

                if (settings.url && typeof settings.url === 'string') {
                    var text = this.value;
                    $(results).html('<li class="ajaxSearching"><a class="ui-corner-all">Buscando...</a></li>').
                        addClass('on').css('height', 'auto');
                    
                    getJSONTimeout = window.clearTimeout(getJSONTimeout);
                    getJSONTimeout = window.setTimeout(function() {
                        $.getJSON(settings.url, {search: text}, function(data) {
                            if (data) {
                                buildResults(data, text);
                            }
                            else {
                                $(results).html('').removeClass('on');
                            }
                        });
                    }, 500);
                }
            }
            
            /**
            * To call specific actions based on the keys pressed in the input
            * box. Special keys are up, down and return. All other keys
            * act as normal.
            */
            function keyListener(e) {
                switch (e.keyCode) {
                    case 13: // return key                        
                        if ($("#buscador-general:focus") && ((typeof currentSelection !== 'undefined' && !$(results).hasClass('on')) || typeof currentSelection === 'undefined')) {
                            dmedicina.buscar();
                        } else {
                            $(currentSelection).trigger('click');
                        }                        
                        return false;
                    case 40: // down key
                        if (typeof currentSelection === 'undefined') {
                            currentSelection = $('li:first', results).get(0);
                        }
                        else {
                            currentSelection = $(currentSelection).next().get(0);
                        }
                        
                        setHoverClass(currentSelection);
                        if (currentSelection) {
                            $(results).scrollTop(currentSelection.offsetTop);
                        }
                        
                        return false;
                    case 38: // up key
                        if (typeof currentSelection === 'undefined') {
                            currentSelection = $('li:last', results).get(0);
                        }
                        else {
                            currentSelection = $(currentSelection).prev().get(0);
                        }
                        
                        setHoverClass(currentSelection);
                        if (currentSelection) {
                            $(results).scrollTop(currentSelection.offsetTop);
                        }
                        
                        return false;
                    default:
                        runSuggest.apply(this, [e]);
                }
            }
            
            // Prepare the input box to show suggest results by adding in the events
            // that will initiate the search and placing the element on the page
            // that will show the results.
            $(results).addClass('jsonSuggest').
                attr('role', 'listbox').
                css({
                    'top': (obj.position().top + obj.outerHeight()) + 'px',
                    'left': '0px',
                    'width': settings.width || (obj.outerWidth() + 'px'),
                    'z-index': 999
                }).removeClass('on');            

            obj.after(results).
                keyup(keyListener).
                keydown(function(e) {
                    // for tab key only
                    if (e.keyCode === 9 && currentSelection) {
                        $(currentSelection).trigger('click');
                        return true;
                    }
                }).
                blur(function(e) {
                    // We need to make sure we don't hide the result set
                    // if the input blur event is called because of clicking on
                    // a result item.
                    var resPos = $(results).offset();
                    resPos.bottom = resPos.top + $(results).height();
                    resPos.right = resPos.left + $(results).width();
                    
                    if (pageY < resPos.top || pageY > resPos.bottom || pageX < resPos.left || pageX > resPos.right) {
                        $(results).removeClass('on');
                    }
                }).
                focus(function(e) {
                    // $(results).css({
                    //     'top': (obj.position().top + obj.outerHeight()) + 'px',
                    //     'left': '0px'
                    // });
                
                    // if ($('li', results).length > 0) {
                    //     $(results).show();
                    // }
                }).
                attr('autocomplete', 'off');
            $(window).mousemove(function(e) {
                pageX = e.pageX;
                pageY = e.pageY;
            });
            
            // Escape the not character if present so that it doesn't act in the regular expression
            settings.notCharacter = regexEscape(settings.notCharacter || '');            
        });
    };

})(jQuery);


/** ==========================================================

* jquery lightSlider.js v1.1.1
* http://sachinchoolur.github.io/lightslider/
* Released under the MIT License - http://opensource.org/licenses/mit-license.html  ---- FREE ----

=========================================================/**/
;
(function ($, undefined) {
    "use strict";
    var defaults = {
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 10,
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',//
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimatoin: true,
        pause: 2000,
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
        rtl: false,
        adaptiveHeight: false,
        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function ($el) {},
        onSliderLoad: function ($el) {},
        onBeforeSlide: function ($el, scene) {},
        onAfterSlide: function ($el, scene) {},
        onBeforeNextSlide: function ($el, scene) {},
        onBeforePrevSlide: function ($el, scene) {}
    };
    $.fn.lightSlider = function (options) {
        if (this.length === 0) {
            return this;
        }

        if (this.length > 1) {
            this.each(function () {
                $(this).lightSlider(options);
            });
            return this;
        }

        var plugin = {},
            settings = $.extend(true, {}, defaults, options),
            settingsTemp = {},
            $el = this;
        plugin.$el = this;

        if (settings.mode === 'fade') {
            settings.vertical = false;
        }
        var $children = $el.children(),
            windowW = $(window).width(),
            breakpoint = null,
            resposiveObj = null,
            length = 0,
            w = 0,
            on = false,
            elSize = 0,
            $slide = '',
            scene = 0,
            property = (settings.vertical === true) ? "height" : "width",
            gutter = (settings.vertical === true) ? "margin-bottom" : "margin-right",
            slideValue = 0,
            pagerWidth = 0,
            slideWidth = 0,
            thumbWidth = 0,
            interval = null,
            isTouch = ('ontouchstart' in document.documentElement);
        var refresh = new Object();

        refresh.chbreakpoint = function () {
            windowW = $(window).width();
            if (settings.responsive.length) {
                if (settings.autoWidth === false) {
                    var item = settings.item;
                }
                if (windowW < settings.responsive[0].breakpoint) {
                    for (var i = 0; i < settings.responsive.length; i++) {
                        if (windowW < settings.responsive[i].breakpoint) {
                            breakpoint = settings.responsive[i].breakpoint;
                            resposiveObj = settings.responsive[i];
                        }
                    }
                }
                if (typeof resposiveObj !== "undefined" && resposiveObj != null) {
                    for (i in resposiveObj.settings) {
                        if (typeof settingsTemp[i] == "undefined" || settingsTemp[i] == null) {
                            settingsTemp[i] = settings[i];
                        }
                        settings[i] = resposiveObj.settings[i];
                    }
                }
                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
                    for (i in settingsTemp) {
                        settings[i] = settingsTemp[i];
                    }
                }
                if (settings.autoWidth === false) {
                    if (slideValue > 0 && slideWidth > 0) {
                        if (item !== settings.item) {
                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
                        }
                    }
                }
            }
        };

        refresh.calSW = function () {
            if (settings.autoWidth === false) {
                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
            }
        };

        refresh.calWidth = function (cln) {
            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
            if (settings.autoWidth === false) {
                w = ln * (slideWidth + settings.slideMargin);
            } else {
                w = 0;
                for (var i = 0; i < ln; i++) {
                    w += (parseInt($children.eq(i).width()) + settings.slideMargin);
                }
            }
            if (w % 1 !== 0) {
                w = w + 1;
            }
            return w;
        };
        plugin = {
            doCss: function () {
                var support = function () {
                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                    var root = document.documentElement;
                    for (var i = 0; i < transition.length; i++) {
                        if (transition[i] in root.style) {
                            return true;
                        }
                    }
                };
                if (settings.useCSS && support()) {
                    return true;
                }
                return false;
            },
            keyPress: function () {
                if (settings.keyPress) {
                    $(document).on('keyup.lightslider', function (e) {
                        e.preventDefault();
                        if (e.keyCode === 37) {
                            $el.goToPrevSlide();
                            clearInterval(interval);
                        } else if (e.keyCode === 39) {
                            $el.goToNextSlide();
                            clearInterval(interval);
                        }
                    });
                }
            },
            controls: function () {
                if (settings.controls) {
                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
                    if (!settings.autoWidth) {
                        if (length <= settings.item) {
                            $slide.find('.lSAction').hide();
                        }
                    } else {
                        if (refresh.calWidth(false) < elSize) {
                            $slide.find('.lSAction').hide();
                        }
                    }
                    $slide.find('.lSAction a').on('click', function (e) {
                        e.preventDefault();
                        if ($(this).attr('class') === 'lSPrev') {
                            $el.goToPrevSlide();
                        } else {
                            $el.goToNextSlide();
                        }
                        clearInterval(interval);
                        return false;
                    });
                }
            },
            initialStyle: function () {
                var $this = this;
                if (settings.mode === 'fade') {
                    settings.autoWidth = false;
                    settings.slideEndAnimatoin = false;
                }
                if (settings.auto) {
                    settings.slideEndAnimatoin = false;
                };
                if (settings.autoWidth) {
                    settings.slideMove = 1;
                    settings.item = 1;
                }
                if (settings.loop) {
                    settings.slideMove = 1;
                    settings.freeMove = false;
                }
                settings.onBeforeStart.call(this, $el);
                refresh.chbreakpoint();
                $el.addClass('lightSlider').wrap("<div class='lSSlideOuter " + settings.addClass + "'><div class='lSSlideWrapper'></div></div>");
                $slide = $el.parent('.lSSlideWrapper');
                if (settings.rtl === true) {
                    $slide.parent().addClass('lSrtl');
                }
                if (settings.vertical) {
                    $slide.parent().addClass('vertical');
                    elSize = settings.verticalHeight;
                    $slide.css('height', elSize + 'px');
                } else {
                    elSize = $el.outerWidth();
                }
                $children.addClass('lslide');
                if (settings.loop === true && settings.mode === 'slide') {
                    refresh.calSW();
                    refresh.clone = function () {
                        if (refresh.calWidth(true) > elSize) {
                            /**/
                            var tWr = 0,
                                tI = 0;
                            for (var k = 0; k < $children.length; k++) {
                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
                                tI++;
                                if (tWr >= (elSize + settings.slideMargin)) {
                                    break;
                                }
                            }
                            var tItem = settings.autoWidth === true ? tI : settings.item;

                            /**/
                            if (tItem < $el.find('.clone.left').length) {
                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
                                    $children.eq(i).remove();
                                }
                            }
                            if (tItem < $el.find('.clone.right').length) {
                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
                                    scene--;
                                    $children.eq(j).remove();
                                }
                            }
                            /**/
                            for (var k = $el.find('.clone.right').length; k < tItem; k++) {
                                $el.find('.lslide').eq(k).clone().removeClass('lslide').addClass('clone right').appendTo($el);
                                scene++;
                            }
                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
                            }
                            $children = $el.children();
                        } else {
                            if ($children.hasClass('clone')) {
                                $el.find('.clone').remove();
                                $this.move($el, 0);
                            }
                        }
                    };
                    refresh.clone();
                }
                refresh.sSW = function () {
                    length = $children.length;
                    if (settings.rtl === true && settings.vertical === false) {
                        gutter = "margin-left";
                    }
                    if (settings.autoWidth === false) {
                        $children.css(property, slideWidth + 'px');
                    }
                    $children.css(gutter, settings.slideMargin + 'px');
                    w = refresh.calWidth(false);
                    $el.css(property, w + 'px');
                    if (settings.loop === true && settings.mode === 'slide') {
                        if (on === false) {
                            scene = $el.find('.clone.left').length;
                        }
                    }
                };
                refresh.calL = function () {
                    $children = $el.children();
                    length = $children.length;
                };
                if (this.doCss()) {
                    $slide.addClass('usingCss');
                }
                refresh.calL();
                if (settings.mode === "slide") {
                    refresh.calSW();
                    refresh.sSW();
                    if (settings.loop === true) {
                        slideValue = $this.slideValue();
                        this.move($el, slideValue);
                    }
                    if (settings.vertical === false) {
                        this.setHeight($el, false, true);
                    }

                } else {
                    this.setHeight($el, true, true);
                    $el.addClass('lSFade');
                    if (!this.doCss()) {
                        $children.not(".active").css('display', 'none');
                    }
                }
                if (settings.loop === true && settings.mode === 'slide') {
                    $children.eq(scene).addClass('active');
                } else {
                    $children.first().addClass('active');
                }
            },
            pager: function () {
                var $this = this;
                refresh.createPager = function () {
                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
                    var $children = $slide.find('.lslide');
                    var length = $slide.find('.lslide').length;
                    var i = 0,
                        pagers = '',
                        v = 0;
                    for (i = 0; i < length; i++) {
                        if (settings.mode === 'slide') {
                            // calculate scene * slide value
                            if (!settings.autoWidth) {
                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
                            } else {
                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
                            }
                        }
                        // var thumb = $children.eq(i * settings.slideMove).attr('data-thumb'); 
                        var thumb = $children.eq(i * settings.slideMove).find('img').attr('src');
                        if (settings.gallery === true) {
                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
                        } else {
                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                        }
                        if (settings.mode === 'slide') {
                            if ((v) >= w - elSize - settings.slideMargin) {
                                i = i + 1;
                                var minPgr = 2;
                                if (settings.autoWidth) {
                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
                                    minPgr = 1;
                                }
                                if (i < minPgr) {
                                    pagers = null;
                                    $slide.parent().addClass('noPager');
                                } else {
                                    $slide.parent().removeClass('noPager');
                                }
                                break;
                            }
                        }
                    }
                    var $cSouter = $slide.parent();
                    $cSouter.find('.lSPager').html(pagers);
                    if (!settings.vertical && settings.gallery) {
                        var $pgr = $slide.parent().find('.lSGallery');
                        setTimeout(function () {
                            $this.setHeight($pgr, false, false);
                        });
                    }
                    if (settings.gallery === true) {
                        if (settings.vertical === true) {
                            // set Gallery thumbnail width
                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
                        }
                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
                        $cSouter.find('.lSPager').css({
                            property: pagerWidth + 'px',
                            'transition-duration': settings.speed + 'ms'
                        });
                        if (settings.vertical === true) {
                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
                        }
                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
                    }
                    var $pager = $cSouter.find('.lSPager').find('li');
                    $pager.first().addClass('active');
                    $pager.on('click', function () {
                        if (settings.loop === true && settings.mode === 'slide') {
                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
                        } else {
                            scene = $pager.index(this);
                        }
                        $el.mode(false);
                        if (settings.gallery === true) {
                            $this.slideThumb();
                        }
                        clearInterval(interval);
                        return false;
                    });
                };
                if (settings.pager) {
                    var cl = 'lSpg';
                    if (settings.gallery) {
                        cl = 'lSGallery';
                    }
                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
                    var gMargin = (settings.vertical) ? "margin-left" : "margin-top";
                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
                    refresh.createPager();

                }
                
                setTimeout(function () {
                    refresh.init();
                }, 0);
            },
            setHeight: function (ob, fade, loop) {
                var obj = null;
                if (loop) {
                    obj = ob.children(".lslide ").first();
                }else{
                    obj = ob.children().first();
                }
                var setCss = function () {
                    var tH = obj.height(),
                        tP = 0,
                        tHT = tH;
                    if (fade) {
                        tH = 0;
                        tP = ((tHT) * 100) / elSize;
                    }
                    ob.css({
                        'height': tH + 'px',
                        'padding-bottom': tP + '%'
                    });
                };
                setCss();
                obj.find('img').load(function () {
                    setTimeout(function(){
                        setCss();
                    },100);
                });
            },
            active: function (ob, t) {
                if (this.doCss() && settings.mode === "fade") {
                    $slide.addClass('on');
                }
                var sc = 0;
                if (scene * settings.slideMove < length) {
                    ob.removeClass('active');
                    if (!this.doCss() && settings.mode === "fade" && t === false) {
                        ob.fadeOut(settings.speed);
                    }
                    t === true ? sc = scene : sc = scene * settings.slideMove;
                    if (t === true) {
                        var l = ob.length;
                        var nl = l - 1;
                        if (sc + 1 >= l) {
                            sc = nl;
                        }
                    }
                    if (settings.loop === true && settings.mode === 'slide') {
                        t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
                        if (t === true) {
                            var l = ob.length;
                            var nl = l - 1;
                            if (sc + 1 == l) {
                                sc = nl;
                            } else if (sc + 1 > l) {
                                sc = 0;
                            }
                        }
                    }

                    if (!this.doCss() && settings.mode === "fade" && t === false) {
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                    ob.eq(sc).addClass('active');
                } else {
                    ob.removeClass('active');
                    ob.eq(ob.length - 1).addClass('active');
                    if (!this.doCss() && settings.mode === "fade" && t === false) {
                        ob.fadeOut(settings.speed);
                        ob.eq(sc).fadeIn(settings.speed);
                    }
                }
            },
            move: function (ob, v) {
                if (settings.rtl === true) {
                    v = -v;
                }
                if (this.doCss()) {
                    if (settings.vertical === true) {
                        ob.css({
                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
                        });
                    } else {
                        ob.css({
                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
                        });
                    }
                } else {
                    if (settings.vertical === true) {
                        ob.css('position', 'relative').animate({
                            top: -v + 'px'
                        }, settings.speed, settings.easing);
                    } else {
                        ob.css('position', 'relative').animate({
                            left: -v + 'px'
                        }, settings.speed, settings.easing);
                    }
                }
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            fade: function () {
                this.active($children, false);
                var $thumb = $slide.parent().find('.lSPager').find('li');
                this.active($thumb, true);
            },
            slide: function () {
                var $this = this;
                refresh.calSlide = function () {
                    if (w > elSize) {
                        slideValue = $this.slideValue();
                        $this.active($children, false);
                        if ((slideValue) > w - elSize - settings.slideMargin) {
                            slideValue = w - elSize - settings.slideMargin;
                        } else if (slideValue < 0) {
                            slideValue = 0;
                        }
                        $this.move($el, slideValue);
                        if (settings.loop === true && settings.mode === 'slide') {
                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
                                $this.resetSlide($el.find('.clone.left').length);
                            }
                            if (scene === 0) {
                                $this.resetSlide($slide.find('.lslide').length);
                            }
                        }
                    }
                };
                refresh.calSlide();
            },
            resetSlide: function (s) {
                var $this = this;
                $slide.find('.lSAction a').addClass('disabled');
                setTimeout(function () {
                    scene = s;
                    $slide.css('transition-duration', '0ms');
                    slideValue = $this.slideValue();
                    $this.active($children, false);
                    plugin.move($el, slideValue);
                    setTimeout(function () {
                        $slide.css('transition-duration', settings.speed + 'ms');
                        $slide.find('.lSAction a').removeClass('disabled');
                    }, 50);
                }, settings.speed + 100);
            },
            slideValue: function () {
                var _sV = 0;
                if (settings.autoWidth === false) {
                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
                } else {
                    _sV = 0;
                    for (var i = 0; i < scene; i++) {
                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
                    }
                }
                return _sV;
            },
            slideThumb: function () {
                var position;
                switch (settings.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (elSize / 2) - (thumbWidth / 2);
                    break;
                case 'right':
                    position = elSize - thumbWidth;
                }
                var sc = scene - $el.find('.clone.left').length;
                var $pager = $slide.parent().find('.lSPager');
                if (settings.mode === 'slide' && settings.loop === true) {
                    if (sc >= $pager.children().length) {
                        sc = 0;
                    } else if (sc < 0) {
                        sc = $pager.children().length;
                    }
                }
                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
                if ((thumbSlide + elSize) > pagerWidth) {
                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
                }
                if (thumbSlide < 0) {
                    thumbSlide = 0;
                }
                this.move($pager, thumbSlide);
            },
            auto: function () {
                if (settings.auto) {
                    interval = setInterval(function () {
                        $el.goToNextSlide();
                    }, settings.pause);
                }
            },

            touchMove: function (endCoords, startCoords) {
                $slide.css('transition-duration', '0ms');
                if (settings.mode === 'slide') {
                    var distance = endCoords - startCoords;
                    var swipeVal = slideValue - distance;
                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
                        if (settings.freeMove === false) {
                            swipeVal = w - elSize - settings.slideMargin;
                        } else {
                            var swipeValT = w - elSize - settings.slideMargin;
                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

                        }
                    } else if (swipeVal < 0) {
                        if (settings.freeMove === false) {
                            swipeVal = 0;
                        } else {
                            swipeVal = swipeVal / 5;
                        }
                    }
                    this.move($el, swipeVal);
                }
            },

            touchEnd: function (distance) {
                $slide.css('transition-duration', settings.speed + 'ms');
                clearInterval(interval);
                if (settings.mode === 'slide') {
                    var mxVal = false;
                    var _next = true;
                    slideValue = slideValue - distance;
                    if ((slideValue) > w - elSize - settings.slideMargin) {
                        slideValue = w - elSize - settings.slideMargin;
                        if (settings.autoWidth === false) {
                            mxVal = true;
                        }
                    } else if (slideValue < 0) {
                        slideValue = 0;
                    }
                    var gC = function (next) {
                        var ad = 0;
                        if (!mxVal) {
                            if (next) {
                                ad = 1;
                            };
                        }
                        if (!settings.autoWidth) {
                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
                            scene = parseInt(num) + ad;
                            if (slideValue >= (w - elSize - settings.slideMargin)) {
                                if (num % 1 !== 0) {
                                    scene++;
                                }
                            }
                        } else {
                            var tW = 0;
                            for (var i = 0; i < $children.length; i++) {
                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
                                scene = i + ad;
                                if (tW >= slideValue) {
                                    break;
                                }
                            }
                        }
                    };
                    if (distance >= settings.swipeThreshold) {
                        gC(false);
                        _next = false;
                    } else if (distance <= -settings.swipeThreshold) {
                        gC(true);
                        _next = false;
                    }
                    $el.mode(_next);
                    this.slideThumb();
                } else {
                    if (distance >= settings.swipeThreshold) {
                        $el.goToPrevSlide();
                    } else if (distance <= -settings.swipeThreshold) {
                        $el.goToNextSlide();
                    }
                }
            },



            enableDrag: function () {
                var $this = this;
                if (!isTouch) {
                    var startCoords = 0,
                        endCoords = 0,
                        isDraging = false;
                    $slide.on('mousedown', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            isDraging = true;
                            e.preventDefault();
                        }
                    });
                    $(window).on('mousemove', function (e) {
                        if (isDraging) {
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            $this.touchMove(endCoords, startCoords);
                        }
                    });
                    $(window).on('mouseup', function (e) {
                        if (isDraging) {
                            isDraging = false;
                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
                            var distance = endCoords - startCoords;
                            if (Math.abs(distance) >= settings.swipeThreshold) {
                                $(window).on('click.ls', function(e) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                    e.stopPropagation();
                                    $(window).off('click.ls');
                                });
                            }

                            $this.touchEnd(distance);

                        }
                    });
                }
            },




            enableTouch: function () {
                var $this = this;
                if (isTouch) {
                    var startCoords = {},
                        endCoords = {};
                    $slide.on('touchstart', function (e) {
                        endCoords = e.originalEvent.targetTouches[0];
                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
                    });
                    $slide.on('touchmove', function (e) {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        var orig = e.originalEvent;
                        endCoords = orig.targetTouches[0];
                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (settings.vertical === true) {
                            if ((yMovement * 3) > xMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageY, startCoords.pageY);
                        } else {
                            if ((xMovement * 3) > yMovement) {
                                e.preventDefault();
                            }
                            $this.touchMove(endCoords.pageX, startCoords.pageX);
                        }

                    });
                    $slide.on('touchend', function () {
                        if (w < elSize) {
                            if (w !== 0) {
                                return false;
                            }
                        }
                        if (settings.vertical === true) {
                            var distance = endCoords.pageY - startCoords.pageY;
                        } else {
                            var distance = endCoords.pageX - startCoords.pageX;
                        }
                        $this.touchEnd(distance);
                    });
                }
            },
            build: function () {
                var $this = this;
                $this.initialStyle();
                $this.auto();
                if (this.doCss()) {

                    if (settings.enableTouch === true) {
                        $this.enableTouch();
                    }
                    if (settings.enableDrag === true) {
                        $this.enableDrag();
                    }
                }
                $this.pager();
                $this.controls();
                $this.keyPress();
            }
        };
        plugin.build();
        refresh.init = function () {
            refresh.chbreakpoint();
            if (settings.vertical === true) {
                if (settings.item > 1) {
                    elSize = settings.verticalHeight;
                } else {
                    elSize = $children.outerHeight();
                }
                $slide.css('height', elSize + 'px');
            } else {
                elSize = $slide.outerWidth();
            }
            if (settings.loop === true && settings.mode === 'slide') {
                refresh.clone();
            }
            refresh.calL();
            if (settings.mode === "slide") {
                $el.removeClass('lSSlide');
            }
            if (settings.mode === "slide") {
                refresh.calSW();
                refresh.sSW();
            }
            setTimeout(function () {
                if (settings.mode === "slide") {
                    $el.addClass('lSSlide');
                }
            }, 1000);
            if (settings.pager) {
                refresh.createPager();
            }
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).height());
            }
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
            if (settings.mode === "slide") {
                plugin.slide();
            }
            if (settings.autoWidth === false) {
                if ($children.length <= settings.item) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            } else {
                if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
                    $slide.find('.lSAction').hide();
                } else {
                    $slide.find('.lSAction').show();
                }
            }
        };
        $el.goToPrevSlide = function () {
            if (scene > 0) {
                settings.onBeforePrevSlide.call(this, $el, scene);
                scene--;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforePrevSlide.call(this, $el, scene);
                    if (settings.mode === 'fade') {
                        var l = (length - 1);
                        scene = parseInt(l / settings.slideMove);
                    }
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimatoin === true) {
                    $el.addClass('leftEnd');
                    setTimeout(function () {
                        $el.removeClass('leftEnd');
                    }, 400);
                }
            }
        };
        $el.goToNextSlide = function () {
            var nextI = true;
            if (settings.mode === 'slide') {
                var _slideValue = plugin.slideValue();
                var nextI = _slideValue < w - elSize - settings.slideMargin;
            }
            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
                settings.onBeforeNextSlide.call(this, $el, scene);
                scene++;
                $el.mode(false);
                if (settings.gallery === true) {
                    plugin.slideThumb();
                }
            } else {
                if (settings.loop === true) {
                    settings.onBeforeNextSlide.call(this, $el, scene);
                    scene = 0;
                    $el.mode(false);
                    if (settings.gallery === true) {
                        plugin.slideThumb();
                    }
                } else if (settings.slideEndAnimatoin === true) {
                    $el.addClass('rightEnd');
                    setTimeout(function () {
                        $el.removeClass('rightEnd');
                    }, 400);
                }
            }
        };
        $el.mode = function (_touch) {
            if (settings.adaptiveHeight === true && settings.vertical === false) {
                $el.css('height', $children.eq(scene).height());
            }
            if (on === false) {
                if (settings.mode === "slide") {
                    if (plugin.doCss()) {
                        $el.addClass('lSSlide');
                        if (settings.speed !== '') {
                            $slide.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $slide.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                } else {
                    if (plugin.doCss()) {
                        if (settings.speed !== '') {
                            $el.css('transition-duration', settings.speed + 'ms');
                        }
                        if (settings.cssEasing !== '') {
                            $el.css('transition-timing-function', settings.cssEasing);
                        }
                    }
                }
            }
            if (!_touch) {
                settings.onBeforeSlide.call(this, $el, scene);
            }
            if (settings.mode === "slide") {
                plugin.slide();
            } else {
                plugin.fade();
            }
            setTimeout(function () {
                if (!_touch) {
                    settings.onAfterSlide.call(this, $el, scene);
                }
            }, settings.speed);
            on = true;
        };
        $el.play = function () {
            clearInterval(interval);
            $el.goToNextSlide();
            interval = setInterval(function () {
                $el.goToNextSlide();
            }, settings.pause);
        };
        $el.pause = function () {
            clearInterval(interval);
        };
        $el.refresh = function () {
            refresh.init();
        };
        $el.getCurrentSlideCount = function () {
            var sc = scene;
            if (settings.loop) {
                var ln = $slide.find('.lslide').length,
                    cl = $el.find('.clone.left').length;
                if(scene<=cl-1){
                    sc = ln  + (scene-cl);
                }else if(scene >= (ln+cl)){
                    sc = scene - ln - cl;
                }else{
                    sc = scene - cl;
                }
            };
            return sc+1;
        };
        $el.getTotalSlideCount = function(){
            return $slide.find('.lslide').length;
        };
        $el.goToSlide = function (s) {
            if (settings.loop) {
                scene = (s + $el.find('.clone.left').length -1);
            }else{
                scene = s;
            }
            $el.mode(false);
            if (settings.gallery === true) {
                plugin.slideThumb();
            }
        };
        setTimeout(function(){
            settings.onSliderLoad.call(this, $el);
        },10);
        $(window).on('resize orientationchange', function (e) {
            setTimeout(function () {
                e.preventDefault();
                //console.log("hola222");
                refresh.init();
            }, 200);
        });
        return this;
    };
}(jQuery));



/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

        //Buscador productos. Construye la url del filtrado de productos.
        $("#buscador-shopping #buscarProductos").on('click', function(e) {
            e.preventDefault();

            var target = $(this).data('url');

            var selectEspecialidad = $("#buscador-shopping select#selectEspecialidad").val();
            var selectActoMedico = $("#buscador-shopping select#selectActoMedico").val();
            var selectCiudad = $("#buscador-shopping select#selectCiudad").val(); 
            var nespecialidad = selectEspecialidad.split("-");
            var nactomedico = selectActoMedico.split("-");
            var nciudad = selectCiudad.split("-");

            if(selectEspecialidad == ''){
                $('#selectEspecialidad').parent().addClass('errorField');
               // $('#selectCiudad').parent().removeClass('errorField');         
                $('.wrapSelect').parent().find('.errorMessage').remove();
                $('#selectEspecialidad').parent().find('.errorField').append('<div class="errorMessage errorTex">Elige Especialidad</div>');                    
                $('.errorField').parent().append('<div class="errorMessage errorTex">Elige Especialidad</div>');
            }
            else{
                
                var num_total = (selectEspecialidad!='' ? 1 : 0)+(selectActoMedico!='' ? 1 : 0)+(selectCiudad!='' ? 1 : 0)
                var urlFiltros = (selectEspecialidad!='' ? '/'+selectEspecialidad : '')+(selectActoMedico!='' ? '/'+selectActoMedico : '')+(selectCiudad!='' ? '/'+selectCiudad : '');
                if(urlFiltros!=''){
                    var href = target.replace('.html',urlFiltros+'.html');
                     envioSC('http://www.dmedicina.com/tienda.html'+(nespecialidad!='' ? ':'+nespecialidad[1] : '')+(nactomedico!='' ? ':'+nactomedico[1] : '')+(nciudad!='' ? ':'+nciudad[1] : ''));
                     window.location = href;
                  $("#buscador-shopping #buscarProductos").attr("disabled", 'disabled');
                }
                else{
                    window.location = target;
                }
            }  
 
        });
    

        var selectEspecialidad = $("#buscador-shopping select#selectEspecialidad").val();
        var selectActoMedico = $("#buscador-shopping select#selectActoMedico").val();
        var selectCiudad = $("#buscador-shopping select#selectCiudad").val(); 
        if(selectEspecialidad != '' || selectCiudad != ''){
         //$("select").removeAttr('disabled');
         $('span.estado').addClass('activo').removeClass('inactivo');
         $('#selectEspecialidad, #selectCiudad').on('change',function(){          
            if(selectEspecialidad != '' || selectCiudad != ''){
                $('#selectEspecialidad').parent().removeClass('errorField'); 
                $('.wrapSelect').parent().find('.errorMessage').remove();
                //$('span.estado').addClass('activo').removeClass('inactivo');
                //cargarSelectActomedico(selectEspecialidad);
                //console.log(target);
            }else{
                $('#selectEspecialidad , #selectCiudad').parent().removeClass('errorField'); 
                $('.wrapSelect').parent().find('.errorMessage').remove();
                //$('.estado').addClass('inactivo').removeClass('activo');
                $("#selectActoMedico").attr('disabled','disabled');
                //alert('funciona el combo');
            }
         });
        }else{
            $('#selectEspecialidad , #selectCiudad').on('change',function(){
                $(this).parent().removeClass('errorField'); 
                $('.wrapSelect').parent().find('.errorMessage').remove();
            });
            
            $('#selectActoMedico').hide();
            
        }

    // Obtenemos el nombre del navegador si es iphone posicionas el modulo despues de shopping-block3
    var nav = navigator.appName;
    var movIos = navigator.userAgent.toLowerCase();
    var movil = movIos.search("iphone");
    ancho = $( window ).width();

    if(movil > 0 ){
        $('.shopping-block4').appendTo('.conteTienda').insertAfter('section.shopping-block3');
        $('.shopping-buscaEspec').appendTo('.conteTienda').insertAfter('section.shopping-block2');
    }

    
    // Detectamos si nos visitan desde IE
    if(nav == "Microsoft Internet Explorer"){
        // Convertimos en minusculas userAgent
        var ie = navigator.userAgent.toLowerCase();
        // Extraemos version de IE
        var version = parseInt(ie.split('msie')[1]);
        
        $('.shopping-block4').appendTo('.conteTienda').insertAfter('section.shopping-block3');
        
    }
    
    if(ancho < 600){

       if($("div.breadcrumb").children("a").val("inicio")){
        $("div.breadcrumb").children("a:first").val("inicio").html("DM");
        $('.shopping-buscaEspec').appendTo('.conteTienda').insertAfter('section.shopping-block1');
        if($('section.shopping-block5-radio').length){
            $('.shopping-buscaEspec').appendTo('.conteTienda').insertAfter('section.shopping-block5-radio',function(){

            
        });
        }
        
        //console.log(ancho);
        }
        if($('.warning-especilidad').length){
            $('.shopping-block1-Espe').hide();
        }
        $('.TitularMasbus').html('Los servicios más buscados');
    }
    
    var numero = "1";
    var sexo = "f";
     inputEmail = $("#email");
     inputPhone = $("#phone");
     inputEdad = $("#age");
     //inputEdadAgregado = $("#age");
     inputcategoyComp = $("#categy_id");

    var isOkComp = true;


    $("#offer").on('click',function (){
        //alert('entra en el click');
        isOkComp = true;
        
        $("#offerForm div input, #offerForm div select").each(function (i, item) {
            // tienen valor?
            if ($(item).val().length === 0) {
                $(item).not('#category_id').addClass("errorComparator");
                //console.log(item);
                isOkComp = false;
                //alert(i);
            }
           

        });
        
        if (!isOkComp) {
            //alert('entra en false para envio FALTAN DATOSSS');
            return false;
        }else{
            
            if(inputPhone.val().match(/[^0-9]/g)){
            // control numerico
                inputPhone.addClass('errorComparator');
                return false;
            }else{
                // control de 9 digitos
                if(inputPhone.val().length < 9){
                    inputPhone.addClass('errorComparator');
                    return false;
                    //alert('menor de 9 los numeros son ... '+inputPhone.val());
                }else{
                    // control del primer numero 6, 7, 9
                    var numero = inputPhone.val();
                    var primNumero = numero.charAt(0);
                    if(primNumero!= 6 && primNumero!= 7 && primNumero!= 9){
                        //alert('distinto de 6 7 y 9');
                        inputPhone.addClass('errorComparator');
                        //var $nacional = $('<span class="errorMessage">Solo numeros nacionales<span>');
                        //$nacional.remove();
                        //$nacional.insertAfter(inputPhone);
                        return false;
                    }
                }
            }
            if(!inputEmail.val().match(/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i)){
                //validarrrr que es un correo
                inputEmail.addClass('errorComparator');
                //alert('entra en false para envio FALTAN DATOS email');
                return false; 
            }
            if(inputEdad.val().match(/[^0-9]/g)){
            //                console.log('entra en validator de telefono');
                inputEdad.addClass('errorComparator');
                return false;
            }
            // if(inputEdadAgregado.val().match(/[^0-9]/g)){
            //     console.log($(inputEdadAgregado));
            //     inputEdadAgregado.addClass('errorComparator');
            //     return false;
            // }
           
            if(!$('#acceptpolicy').is(':checked')){
                //console.log('esta cheking');
                $('#acceptpolicy').addClass('errorComparator');
                return false; 
            }
            else{
                    //$('form#offerForm').attr({'onsubmit':'true'});
                    envioSC('iSalud_Calcular');
                    //location.reload();
                    //alert('envioCS antes de envio');
                    return true;
                
            }
        }
        
    });
    //quitar foco
    $("form").on('focusin','div input, div select', function (){
        //alert('click en mas asegurados1');
        $(this).removeClass("errorComparator");
        //console.log($(this));
    });
    
   $('.suma').on('click', function(){
        numero++;
        var $NewAsegurado = $("<section id='com-asegurado'><p id='asegurado'>Asegurado " + numero + " </p><select style='display: none;' name='gender[]' id='gender' data-validation-engine='validate[required]' type='hidden'><option value='f'>" + sexo + "</option></select><label>Edad</label><input name='age[]' maxlength='2' id='age' class='age' value='' placeholder='Edad' data-validation-engine='validate[required,custom[integer],max[99]]' type='text'></section>");
        $NewAsegurado.appendTo('.com-block3bis');
        // if(inputEdadAgregado.val().match(/[^0-9]/g)){
        //         console.log($(inputEdadAgregado));
        //         inputEdadAgregado.addClass('errorComparator');
        //         return false;
        //     }
   });
        
   $('.resta').on('click', function(){
        numero--;
        $('section #com-asegurado').last().remove();
    });
    
    if(ancho < 1029){
        $('.banner-sky-izq').remove();
        //$('.banner-sky-derecha').remove();
    }
    //console.log(ancho);
    if(ancho < 769){
        $('.banner-sky-derecha').remove();
    }
    if(ancho < 668){
        
        $('.banner-sky-izq').remove();
        $('.banner-sky-derecha').remove();
        //$('.block-horizontal').remove();
        $('.block-horizontal').remove();
        $('.blockComparador-ocul').addClass('visibleComparador');
        if($('.conteTienda section.blk-detail div.Landig-compara-tex').length ){
           //$('.block-comparador').remove();
           $('section.blk-detail').addClass('noPadding');

        }
        $('div#PROMO').remove();
        //var $lipromo = $('li#promoMovil');
        $('.carruselBlockImgPromo').appendTo('.lightSliderWrap ul');
        
    }
    if(ancho > 668){
        $('section.blk-detail section.block-comparador').remove();
       if($('.conteTienda section.blk-detail div.Landig-compara-tex').length ){
           //$('.block-comparador').remove();
           $('section.blk-detail').addClass('noPadding');
       }
        
        $('li.carruselBlockImgPromo').remove();
        $('div#PROMO').appendTo('.holder');
       
       

    }
    

   destacado();
   posicionarLiResponsive();
    //var pathname='';
    function destacado() {
        //var pathname = window.location.pathname.substring(1);
        var destacadoVisible = $('.cell-860 div.destacamos');

        if(destacadoVisible.length){

            if($('#sesion-name').length){
                if($('.contextual-links-region').length){
                    //$(destacadoVisible).parents('div').insertAfter('main.grid div:nth(1)');
                    //alert('siiiiiiii administrator');
                    $(destacadoVisible).insertAfter('main.grid div:nth(1)');
                }else{
                    $(destacadoVisible).insertAfter('main.grid div:nth(1)');
                }
                
            }else{
                $(destacadoVisible).insertAfter('main.grid div:nth(1)');  
            }
        }
    }
    function borrarImgCarrusel(){
        $('.carruselConte div.carruselBlock div.lSSlideOuter > ul li a img').remove();
        //alert('borrar');
    }
    function posicionarLiResponsive(){
        if('li#promoMovil'.length > 0){
            $('li#promoMovil').appendTo('cell-860 .carruselConte div.carruselBlock div.lSSlideOuter div.lSSlideWrapper ul.lSSlide');
            console.log('entra en li para moverlo');
        }
        
    }

 
    
    
    

}));