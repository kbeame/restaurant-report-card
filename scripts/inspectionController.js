(function(module) {
  inspectionController = {};

  inspectionController.index = function() {
    $('main').children().hide();
    $('#search-input').focus();
  };

  inspectionController.search = function(){
    $('.restaurant-search').on('submit', function(event) {
      event.preventDefault();
      var restName = $('#search-input').val();
      restName = restName.replace(/[^\w\s]/gi, '+');

      Inspection.requestInspectionData(restName, Inspection.with);
    });
  };
  inspectionController.search();

  module.inspectionController = inspectionController;
})(window);
