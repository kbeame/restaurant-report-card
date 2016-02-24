(function(module) {
  var inspectionView = {};

  inspectionView.displayResults = function() {
    var $reportCard = $('#report-card ul');

    $reportCard.empty();
    $reportCard.append($('<li>').text('Restaurant Name: ' + Inspection.current[0].name));
    $reportCard.append($('<li>').text('Violation Score: ' + Inspection.current[0].inspection_score));
    $('#report-card').css('background-color', 'green');
  };

  module.inspectionView = inspectionView;
})(window);
