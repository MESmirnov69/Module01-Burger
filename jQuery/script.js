$('.btn').click(function(){
    $('.box').fadeToggle()
});

$('.box').after('<p class="text">Этот пример сделан на jQuery</p>');

$(function(){
    $('.btn').text('Сделай клик');
});
