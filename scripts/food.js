(function(module) {
  var inspection = {};
  inspection.all =[];

  inspection.requestInspectionData = function(callback) {
    $.get('https://data.kingcounty.gov/resource/gkhn-e8mn.json')
      .done(function(data, message, xhr) {
        inspection.all = data;
      }).done(callback);
  };

  inspection.with = function(attr) {
    console.log('inspection function');
    return inspection.all.filter(function(inspection){
      return inspection[attr];
      console.log(inspection.all);
    });
  };

  inspection.requestInspectionData(inspection.with);
  module.inspection = inspection;
})(window);
