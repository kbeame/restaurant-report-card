(function(module) {
  var aboutInit = {};

  aboutInit.aboutKonami = function () {
    $( window ).konami();
    $( window ).on('konami', function() {
      $('#about-konami').show();
      $('#about-bear').attr('class', 'in-view');
      setTimeout(function () {
        $('#about-glasses').attr('class', 'slide-down');
      }, 400);
    });
  };
  aboutInit.aboutKonami();

  module.aboutInit = aboutInit;
})(window);
