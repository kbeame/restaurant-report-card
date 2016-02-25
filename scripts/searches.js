(function(module) {
  var searches = {};

  searches.init = function () {
    webDB.execute('SELECT * FROM recentInspect', function(rows) {
      
    });
  };
  searches.init();

  module.searches = searches;
})(window);
