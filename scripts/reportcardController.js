(function(module) {
  var reportcardController = {};

  reportcardController.index = function (ctx) {
    inspectionController.index();
    Inspection.requestInspectionData(ctx.params.establishment, Inspection.with);

    historyInit.requestHistoryData(ctx.params.establishment);
  };
  module.reportcardController = reportcardController;
})(window);
