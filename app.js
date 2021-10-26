$(function() {

    $('.overlay').hide();

    $(".uc__01").on({
        mouseenter: function () {
            $('.ov__01').fadeIn(500);
        },
        mouseleave: function () {
            $('.ov__01').fadeOut(500);
            $('.ta01').animate({ height: "1em" }, 100);
        }
    });

    $(".uc__02").on({
        mouseenter: function () {
            $('.ov__02').fadeIn(500);
        },
        mouseleave: function () {
            $('.ov__02').fadeOut(500);
            $('.ta02').animate({ height: "1em" }, 100);
        }
    });

    $(".uc__03").on({
        mouseenter: function () {
            $('.ov__03').fadeIn(500);
        },
        mouseleave: function () {
            $('.ov__03').fadeOut(500);
            $('.ta03').animate({ height: "1em" }, 100);
        }
    });

    $('.b01').click(function(){
        $('.ta01').animate({ height: "13em" }, 500);
   });
    $('.b02').click(function(){
        $('.ta02').animate({ height: "13em" }, 500);
   });
    $('.b03').click(function(){
        $('.ta03').animate({ height: "13em" }, 500);
   });

});