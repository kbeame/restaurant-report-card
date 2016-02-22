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
      url: 'data/resource/gkhn-e8mn.json?$query=SELECT%20name,inspection_score,inspection_date%20ORDER%20BY%20name,inspection_date%20DESC',
      success: function(data, message, xhr){
        console.log(xhr);
        console.log(data);
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
