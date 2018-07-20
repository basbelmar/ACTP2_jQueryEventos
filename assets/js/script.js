$(function() {
  // Handler for .ready() called.

  $('.card').on('click', function(e){
        $(this).toggleClass('card--open');
});

$('.card__like').click(function(e) {
  $(this).toggleClass('card__like--red');
          e.preventDefault();
          e.stopPropagation();
});

$('.card__follow-btn').click(function(e){
	  $(this).toggleClass('card__follow-btn--following');
	  e.preventDefault();
      e.stopPropagation();

});

});






