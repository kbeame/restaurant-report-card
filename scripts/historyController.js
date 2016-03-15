(function(module) {
  var historyController = {};

  historyController.index = function() {
    $('main').on('click', '#view-history', function() {
      $('#inspection-history').toggle();
      historyInit.requestHistoryData();
    });
  };
  historyController.index();

  module.historyController = historyController;
})(window);
