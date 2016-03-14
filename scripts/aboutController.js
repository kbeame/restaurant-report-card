(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    inspectionController.index();
    $('#about').show().siblings().hide();
    $('#about-glasses').removeClass('slide-down');

    setTimeout(function () {
      $('#about-bear').removeClass('in-view');
      $('#about-konami').hide();
    }, 3000);
  };

  module.aboutController = aboutController;
})(window);
