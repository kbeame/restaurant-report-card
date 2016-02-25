(function(module) {
  var searchesView = {};

  searchesView.displaySearchRow = function(result) {
    var template = Handlebars.compile($('#searches-template').text());

    return template(result);
  };

  module.searchesView = searchesView;
})(window);
