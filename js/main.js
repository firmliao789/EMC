(function ($) {
    "use strict";

    /*--------------------------
    preloader
    ---------------------------- */

    $(window).on('load', function () {
        var pre_loader = $('#preloader')
        pre_loader.fadeOut('slow', function () {
            $(this).remove();
        });
    });


    /*------------------------------------
     search option
    ------------------------------------- */

    $('.search-option').hide();
    $(".main-search").on('click', function () {
        $('.search-option').animate({
            height: 'toggle',
        });
    });

    /*---------------------
     TOP Menu Stick
    --------------------- */

    var windows = $(window);
    var sticky = $('#sticker');

    windows.on('scroll', function () {
        var scroll = windows.scrollTop();
        if (scroll < 300) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */

    var mean_menu = $('nav#dropdown');
    mean_menu.meanmenu();

    /*---------------------
     wow .js
    --------------------- */
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }

    wowAnimation()

    /*--------------------------
     scrollUp
    ---------------------------- */

    // $.scrollUp({
    // 	scrollText: '顶部',
    // 	easingType: 'linear',
    // 	scrollSpeed: 900,
    // 	animation: 'fade'
    // });

    /*----------------------------
     Counter js active
    ------------------------------ */

    var count = $('.counter');
    count.counterUp({
        delay: 40,
        time: 3000
    });

    /*--------------------------
     collapse
    ---------------------------- */

    var panel_test = $('.panel-heading a');
    panel_test.on('click', function () {
        panel_test.removeClass('active');
        $(this).addClass('active');
    });

    /*--------------------------
     MagnificPopup
    ---------------------------- */

    $('.video-play').magnificPopup({
        type: 'iframe'
    });


    /*---------------------
     Services carousel
    ---------------------*/

    var services = $('.services-carousel');
    services.owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        dots: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*---------------------
     Testimonial carousel
    ---------------------*/

    var review = $('.testimonial-carousel');
    review.owlCarousel({
        loop: true,
        nav: false,
        margin: 120,
        center: true,
        dots: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*----------------------------
        Contact form
    ------------------------------ */

    /*----------------------------
        忘记密码
    ------------------------------ */
    $('#forgetPassword').on('click',function () {
        alert('请联系管理员重置密码：121313')
    })

    $("#contactForm").on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        var name = $("#name").val();
        var email = $("#email").val();
        var msg_subject = $("#msg_subject").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "assets/contact.php",
            data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
            success: function (text) {
                if (text === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


})(jQuery); 