$(document).ready(function() { 
    var popupHTML = '';
    popupHTML += '<div class="modal fade custom-modal" id="readMoreModal" tabindex="-1" role="dialog" aria-hidden="true">';
    popupHTML += '<div class="modal-dialog" role="document">';
    popupHTML += '<div class="modal-content">';
    popupHTML += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    popupHTML += '<i class="far fa-times-circle"></i>';
    popupHTML += '</button>';
    popupHTML += '<div class="modal-body read-more-modal">';
    popupHTML += '<div class="row">';
    popupHTML += '<div class="col-12 read-more-modal-details service-details-popup">';
    popupHTML += '<h3>WE SUGGEST YOU TO CAREFULLY FOLLOW ALL THE RECOMMENDED STEPS FOR SPEEDY RESULTS.</h3>';
    popupHTML += '<ul class="about-us-list">';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>Comb your hair before applying oil.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>Apply Henna herbal oil on your scalp with the help of finger tips.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>Do not massage your scalp using your nails.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>Massage with your finger tips for five to ten minutes.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>It is recommended to apply Henna herbal oil before going to bed and wash your hair in the morning with acacia powder or shampoo. Using acacia powder or paste are likely to give better results.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>Apply Henna herbal oil three days in a week.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>For best results, use this oil for 4 weeks.</label>';
    popupHTML += '</li>';
    popupHTML += '<li><i class="fas fa-check-circle"></i>';
    popupHTML += '<label>Don’t worry if you see hair fall in the first two or three uses; it may be due to hair with weak roots.</label>';
    popupHTML += '</li>';
    popupHTML += '</ul>';
    popupHTML += '</div>';
    popupHTML += '</div>';
    popupHTML += '</div>';
    popupHTML += '</div>';
    popupHTML += '</div>';
    popupHTML += '</div>';
    $('#howToUsePopup').html(popupHTML);

    /* nav click menu */
    $('.navbar-nav li a').click(function(){
       var $href = $(this).attr('href');
       if ($($href).length) {
        $('html, body').animate({
            scrollTop: $($href).offset().top
        }, 500);
        }
    });
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    /*-- Main Slider Carousel --*/
    $('.main-slider').owlCarousel({
        // loop:true,
        // autoplay: true,
        responsiveClass:true,
        nav: true,
        navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                // nav:true
            }
        }
    });

     /*-- Testimonials Slider Carousel --*/
     $('.testimonials-slider').owlCarousel({
        loop:true,
        margin: 20,
        responsiveClass:true,
        autoplay: false,  
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }
        }
    }); 

    /*-- Online Store Carousel --*/
    $('.products-slider').owlCarousel({
        loop:false,
        margin:20,
        responsiveClass:true,
        autoplay: true,        
        navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1100:{
                items:4
            }
        }
    });

    /*-- Fixing Menu onscroll --*/
    $(window).scroll(function(){
        var sticky = $('header'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 100) sticky.addClass('fixed-header-menu');
        else sticky.removeClass('fixed-header-menu');
    });    

     /*-- Contact Us --*/
     $(function () {
        $('.input-field-control').each(function () {
          $($(this).parent().find('.input-file-btn input')).on('change', {dummy: this}, function(ev) {
            $(ev.data.dummy)
              .val($(this).val().replace(/\\/g, '/').replace(/.*\//, ''))
              .trigger('focusout');
          });
          $(this).on('focusin', function () {
              $(this).attr('readonly', '');
            }).on('focusout', function () {
              $(this).removeAttr('readonly');
            }).on('click', function () {
              $(this).parent().find('.input-file-btn').click();
            });
        });
      });

      /* Switch language */
    //   $('#body').multilang({
    //       defaultLang:'en',
    //       menu: true,
    //       languages:{
    //       'zh':{'name':'Chinese','nativeName':'中文'},
    //       'en':{'name':'English','nativeName':'English'}
    //       }
    //   });

      /*-- Scroll Top --*/
      $('.scroll-top').on('click', function(event) {
        $('html, body').animate({scrollTop:0}, 500);
    });
      
  });