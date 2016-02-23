(function(module) {
  var mapView = {};

  mapView.updateMap = function() {
    $('#inspect-map').show();
    mapInspection.initMap();
    var inspectionLatLong = {lat: parseFloat(Inspection.current[0].latitude), lng: parseFloat(Inspection.current[0].longitude)};
    mapInspection.map.setCenter(inspectionLatLong);
    mapInspection.map.setZoom(17);
    var marker = new google.maps.Marker({
      position: inspectionLatLong,
      map: mapInspection.map,
      title: Inspection.current[0].name
      // icon: '/images/inspection-grade-svg/doodle-smiley-icons-b-plus.svg'
    });
  };

  module.mapView = mapView;
})(window);
