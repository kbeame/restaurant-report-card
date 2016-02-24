(function(module) {
  var history = {};
  history.all = [];

  history.requestHistoryData = function(place) {
    $.get('/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,address,inspection_result,zip_code,city,inspection_closed_business,violation_type,violation_description,longitude,latitude&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&name=' + place)
    .done(function(data, message, xhr) {
      history.all = data;
      // historyView.displayResults();
    });
  };
  module.history = history;
}) (window);
