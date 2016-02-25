(function(module) {
  var searchesView = {};

  searchesView.displaySearchRow = function(result) {
    var template = Handlebars.compile($('#history-template').text());

    return template(result);
  };

  module.searchesView = searchesView;
})(window);
