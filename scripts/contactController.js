(function(module) {
  var contactController = {};

  contactController.index = function() {
    inspectionController.index();
    $('#contact').show().siblings().hide();
  };

  module.contactController = contactController;
})(window);
