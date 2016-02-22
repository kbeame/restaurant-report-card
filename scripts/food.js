(function(module) {
  function Inspection (options) {
    Object.keys(options).forEach(function(element, index, keys){
      this[element] = options[element];
    },this);
  }
  Inspection.all =[];

  Inspection.requestInspectionData = function(callback) {
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
        Inspection.all = data;
      }
    });
  };

  Inspection.with = function(attr) {
    console.log('inspection function');
    return Inspection.all.filter(function(inspection){
      return inspection[attr];
      console.log(Inspection.all);
    });
  };

  Inspection.requestInspectionData(Inspection.with);
  module.inspection = inspection;
})(window);
