(function(module) {
  var projectController = {};

  projectController.index = function() {
    inspectionController.index();
    $('#project').show().siblings().hide();
  };

  module.projectController = projectController;
})(window);
