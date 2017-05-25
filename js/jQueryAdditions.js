(function(){
  $('#header').addClass('animated bounce');

  $('#header').click(
    function () {
      $('h1').toggleClass('animated pulse');
      $('#imageOfMe').css('display','block');
    }
  );

})();
