(function(module) {
  var searches = {};

  searches.init = function() {
    webDB.execute('SELECT * FROM recentInspect', function(rows) {
      $('#search-history table tbody').empty();
      rows.forEach(function(current) {
        current.inspection_date = current.inspection_date.substring(0, 10);
        $('#search-history table tbody').append(searchesView.displaySearchRow(current));
      });
    });
  };
  searches.init();

  module.searches = searches;
})(window);
