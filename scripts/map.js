(function(module) {
  var mapInspection = {};

  mapInspection.initMap = function() {
    mapInspection.map = new google.maps.Map(document.getElementById('inspect-map'), {
      center: {lat: 47.6097, lng: -122.3331},
      zoom: 15
    });
  };

  module.mapInspection = mapInspection;
})(window);
