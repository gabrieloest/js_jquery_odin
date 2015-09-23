$(document).ready(function(){

  var init = function(){
    var size = prompt('How many cells(between 10 - 40) per line/colum you like your board have?');

    if (size <= 40) {

      for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            $('#squareBoard').append('<div class="square"></div>');
        }

        $('#squareBoard').append('<div class="newRow"></div>');
      }

    }else{
      alert('Are you crazy budy?!?!?!')
      init();
    }
  };

  init();

  $('.square').mouseenter(function(){
    $(this).addClass('squareVisited');

  });
});
