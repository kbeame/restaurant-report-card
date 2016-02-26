(function(module) {
  var historyController = {};

  historyController.index = function() {
    $('#inspection-history').toggle();
  };

  module.historyController = historyController;
})(window);
