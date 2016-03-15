(function(module) {
  inspectionController = {};

  inspectionController.index = function() {
    $('main').children().hide();

    $('.restaurant-search').on('submit', function(event) {
      event.preventDefault();
      var restName = $('#search-input').val();
      restName = restName.replace(/[^\w\s]/gi, '+');

      Inspection.requestInspectionData(restName, Inspection.with);
      historyInit.requestHistoryData(restName);
    });

    $('#search-input').focus();
  };

  module.inspectionController = inspectionController;
})(window);
