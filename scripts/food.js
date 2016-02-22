(function(module) {
  var inspection = {};
  inspection.all =[];

  inspection.requestInspectionData = function(callback) {
    // $.get('https://data.kingcounty.gov/resource/gkhn-e8mn.json')
    //   .done(function(data, message, xhr) {
    //     inspection.all = data;
    //   }).done(callback);
    $.ajax({
      type: 'GET',
      url: 'data/resource/gkhn-e8mn.json?$select=name,max(inspection_date)&$group=name&$order=name&$limit=50000',
      success: function(data, message, xhr){
        console.log(xhr);
        console.log(data);
        inspection.all = data;
      }
    });
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
