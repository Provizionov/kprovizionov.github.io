$('.button').click( function(){
    $('.popup-window').addClass('opened animated fadeIn');
    
    setTimeout(function(){
        $('.form-popup h2').addClass('opened animated flipInX');
        $('.form-popup-wrapper').addClass('opened animated fadeIn');
    }, 300);
    
    
    return false;
});

$('.close-button').click( function(){
    $('.popup-window, .form-popup h2, .form-popup-wrapper').removeClass('opened');
    return false;
})