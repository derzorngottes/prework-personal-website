//JQuery for details.html
$(document).ready(function(){
  $('.container').on('click', 'button', function(){
    $(this).closest('.container').find('.content').slideToggle();
  })
});