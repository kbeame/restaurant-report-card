(function(module) {
  inspectionController = {};

  inspectionController.index = function() {
    $('main').children().hide();

    Inspection.createTable();

    $('.restaurant-search').on('submit', function(event) {
      event.preventDefault();
      var restName = $('#search-input').val();
      console.log('restName ' + restName);
      restName = restName.replace(/[^\w\s]/gi, '+');

      Inspection.requestInspectionData(restName, Inspection.with);
      historyInit.requestHistoryData(restName);
      // $('#search-input').val('');
    });

    Inspection.buildNames(Inspection.inputOptions);
    $('#search-input').focus();
  };

  module.inspectionController = inspectionController;
})(window);
