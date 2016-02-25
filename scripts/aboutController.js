(function(module){
  var aboutController = {};

  aboutController.index= function() {
    $('#about').show().siblings().hide();
    $('#about-glasses').removeClass('slide-down');
    setTimeout(function () {
      $('#about-bear').removeClass('in-view');
    }, 3000);
  };
  module.aboutController = aboutController;
})(window);
