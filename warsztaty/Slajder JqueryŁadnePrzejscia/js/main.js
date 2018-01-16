'use strict';

$(document).ready(function() {
    
    // Zmienne
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    // Szerokość kontenera .slide-show
    slideShow.css('width', slideCount + '00%')
    
    // Nadaj każdemu slajdowi szerokość i lewy margines
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({'width': slideWidth + '%', 
            'margin-left': index * slideWidth + '%' })    
    });

    // Obsługa nawigacji slajdera
    $('.prev-slide').click(function() {
//        console.log('w lewo');
        slide(slideIndex - 1);        
    });
    
    $('.next-slide').click(function() {
//        console.log('w prawo');
        slide(slideIndex + 1);        
    });    
    
    // Funkcja slide
    function slide(newSlideIndex) {
        
        if ( newSlideIndex >= slideCount) {
            newSlideIndex=0;
        }
        if(newSlideIndex < 0 ){
            newSlideIndex=3;
        }
        var slideCaption = slideShow.find('.slide-caption')
                        .eq(newSlideIndex);
        
        var marginLeft = (newSlideIndex * (-100)) + '%'
        
        slideCaption.hide();
        
        slideShow.animate({'margin-left': marginLeft}, 
            800, 
            function() {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
        
    }
    


});