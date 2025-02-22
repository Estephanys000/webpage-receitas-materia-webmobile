$(document).ready(function() {
    // Inicialmente, esconde todos os cards e mostra o primeiro
    $('.recipe-card').hide();
    $('.recipe-card').first().show();
  
    $('.next').click(function() {
      var current = $('.recipe-card:visible');
      var next = current.next('.recipe-card');
      if (next.length === 0) {
        next = $('.recipe-card').first();
      }
      current.fadeOut(500, function() {
        next.fadeIn(500);
      });
    });
  
    $('.prev').click(function() {
      var current = $('.recipe-card:visible');
      var prev = current.prev('.recipe-card');
      if (prev.length === 0) {
        prev = $('.recipe-card').last();
      }
      current.fadeOut(500, function() {
        prev.fadeIn(500);
      });
    });
  });
  