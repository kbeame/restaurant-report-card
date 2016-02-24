(function(module) {
  var historyInit = {};
  historyInit.all = [];

  historyInit.requestHistoryData = function(place) {
    $.get('/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,address,inspection_result,zip_code,city,inspection_closed_business,violation_type,violation_description,longitude,latitude&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&$q=' + place)
    .done(function(data, message, xhr) {
      historyInit.all = data;
      // historyView.displayResults();
    });
  };
  module.historyInit = historyInit;
})(window);
