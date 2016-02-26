(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('#contact').show().siblings().hide();
  };

  module.contactController = contactController;
})(window);
