(function(module) {
  var historyInit = {};
  historyInit.all = [];

  historyInit.requestHistoryData = function() {
    $('#inspection-history table tbody').empty();

    historyInit.all.forEach(function(current) {
      current.inspection_date = current.inspection_date.substring(0, 10);
      $('#inspection-history table tbody').append(historyView.displayHistoryRow(current));
    });
  };

  module.historyInit = historyInit;
})(window);
