(function(module){
  var projectController = {};

  projectController.index= function() {
    $('#project').show().siblings().hide();
  };
  module.projectController = projectController;
})(window);
