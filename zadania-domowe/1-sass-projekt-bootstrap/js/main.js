$(document).ready(function() {
    addScrolled();
    onMethod();
});

$(document).scroll(function() {
    addScrolled();
});

function addScrolled() {
    var height = $('#main-nav').height();
    var scroll = $(window).scrollTop();


    if(scroll > height) {
        $('#main-nav').addClass('transparent_blue');
    } else {
        $('#main-nav').removeClass('transparent_blue');
    }
}

function onMethod() {
    $('#image1, #image2, #image3, #image4, #image5, #image6').on({
        'mouseenter': function () {
            $(this).css('transform', 'scale(1.2)');
        },
        'mouseleave': function () {
            $(this).css('transform', 'scale(1)');
        }
    });
}