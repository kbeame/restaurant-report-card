(function(module) {
  inspectionController = {};

  inspectionController.index = function() {
    Inspection.createTable();

    $('.restaurant-search').on('submit', function(event) {
      event.preventDefault();
      var restName = $('#search-input').val();
      restName = restName.replace(/[^\w\s]/gi, ' ');

      Inspection.requestInspectionData(restName, Inspection.with);
      historyInit.requestHistoryData(restName);
      $('#search-input').val('');
    });

    Inspection.buildNames(Inspection.inputOptions);
    $('main').children().hide();
    $('#search-input').focus();
  };

  module.inspectionController = inspectionController;
})(window);
