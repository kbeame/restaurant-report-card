(function(module) {
  var mapInspection = {};

  var map;
  mapInspection.initMap = function() {
    map = new google.maps.Map(document.getElementById('inspect-map'), {
      center: {lat: parseFloat(Inspection.current[0].latitude), lng: parseFloat(Inspection.current[0].longitude)},
      zoom: 18
    });
  };

  module.mapInspection = mapInspection;
})(window);
