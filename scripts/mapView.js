(function(module) {
  var mapView = {};

  mapView.updateMap = function(current) {
    $('#inspect-map').show();
    mapInspection.initMap();

    var inspectionLatLong = {lat: parseFloat(current.latitude), lng: parseFloat(current.longitude)};
    mapInspection.map.setCenter(inspectionLatLong);
    mapInspection.map.setZoom(17);

    var marker = new google.maps.Marker(
      {
        position: inspectionLatLong,
        map: mapInspection.map,
        title: current.name
      }
    );
  };

  module.mapView = mapView;
})(window);
