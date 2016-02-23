(function(module) {
  var map = {};
  map.all =[];

  map.requestMapData = function(callback) {
    $.ajax({
      type: 'GET',
      url: '/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,latitude,longitude&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&name=1000%20SPIRITS&$limit=1',
      success: function(data, message, xhr){
        someData = data;
        console.log(someData[0].longitude);
        $('#testmap').hide();
        // $('#testmap').attr('src', 'https://www.google.com/maps/embed/v1/place?q=' + someData[0].latitude + '%20' + someData[0].longitude + '&key=AIzaSyA5mzSMO7vtgDl8qgdAwPdcQbJoCNXEH6s');
      }
    });
  };

  module.map = map;
})(window);
