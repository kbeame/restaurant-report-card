(function(module) {
  var inspectionView = {};

  inspectionView.displayResults = function(inspection) {
    // var $reportCard = $('#report-card ul');
    //
    // $reportCard.empty();
    // $reportCard.append($('<li>').text('Restaurant Name: ' + Inspection.current[0].name));
    // $reportCard.append($('<li>').text('Violation Score: ' + Inspection.current[0].inspection_score));
    // $reportCard.append($('<li>').text('Date: ' + Inspection.current[0].inspection_date.substring(0, 10)));
    // $('#report-card').css('background-color', 'green');
    var template = Handlebars.compile($('#report-card-template').text());

    return template(inspection);
  };

  module.inspectionView = inspectionView;
})(window);
