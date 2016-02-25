(function(module) {
  var aboutInit = {};

  aboutInit.aboutKonami = function () {
    $( window ).konami();
    $( window ).on('konami', function() {
      $('#about-bear').attr('class', 'in-view');
      $('#about-glasses').attr('class', 'slide-down');
    });
  };
  aboutInit.aboutKonami();

  module.aboutInit = aboutInit;
})(window);
