(function(module) {
  var historyInit = {};
  historyInit.all = [];

  historyInit.requestHistoryData = function(userInput) {
    $.get('/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,address,inspection_result,zip_code,city,inspection_closed_business,violation_type,violation_description,longitude,latitude&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&$q=' + userInput)
    .done(function(data, message, xhr) {
      historyInit.all = data;
      
      $('#inspection-history table tbody').empty();
      historyInit.all.forEach(function(current) {
        current.inspection_date = current.inspection_date.substring(0, 10);
        $('#inspection-history table tbody').append(historyView.displayHistoryRow(current));
      });
    });
  };

  module.historyInit = historyInit;
})(window);
