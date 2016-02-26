(function(module) {
  var historyView = {};

  historyView.displayHistoryRow = function(result) {
    var template = Handlebars.compile($('#history-template').text());
    return template(result);
  };

  module.historyView = historyView;
}) (window);
