// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3

//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage

//= require_tree .
/* global $ */

// $(function () {
//     $('.point').click(function () {
//         $(this).toggle('active');
//     });
// });



// $('.point').click(function() {
//     if (clicks % 2 == 0 || clicks == 0){
//         $(this).removeClass('active');
//     } else{
//         $(this).addClass('active');
//     }
//     ++clicks;
// });

// $(function(){
//     var btn = $('.point');
//     btn.click(function(){
//         if  (clicks % 2 == 0 || clicks == 0){
//         $(this).removeClass('active');
//     } else{
//         $(this).addClass('active');
//     }
//     ++clicks;
//     });
// });

//ボタンが共存しないようにする
$(function(){
    var btn = $('.point1');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point2');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point3');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point4');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point5');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point6');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point7');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});
$(function(){
    var btn = $('.point8');
    btn.click(function(){
        btn.removeClass('active');
        $(this).addClass('active');
    });
});


//scrollトップ
$(function(){
    $('#back').on('click',function(event){
        $('body, html').animate({
            scrollTop:0
        }, 400);
        event.preventDefault();
    });
});



