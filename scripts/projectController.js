(function(module) {
  var projectController = {};

  projectController.index = function() {
    inspectionController.index();
    $('#project').show().siblings().hide();

    $('#view-form').on('click', function() {
      $('#form-image').toggle();
    });
  };

  module.projectController = projectController;
})(window);
