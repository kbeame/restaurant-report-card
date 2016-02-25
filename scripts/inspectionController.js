(function(module) {
  inspectionController = {};

  inspectionController.index = function (){
    Inspection.createTable();
    $('.restaurant-search').on('submit', function(event) {
      event.preventDefault();
      var restName = $('#search-input').val();
      restName = restName.replace(/[^\w\s]/gi, ' ');
      console.log('This is the restName:' + restName);
      Inspection.requestInspectionData(restName, Inspection.with);
      historyInit.requestHistoryData(restName);
      $('#search-input').val(' ');
    });
    Inspection.buildNames(Inspection.inputOptions);
    $('main').children().hide();
    $('#search-input').focus();
    // may need to show later
  };

  module.inspectionController = inspectionController;
})(window);
