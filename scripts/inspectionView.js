(function(module) {
  var inspectionView = {};

  inspectionView.displayResults = function(inspection) {
    var template = Handlebars.compile($('#report-card-template').text());

    return template(inspection);
  };
  inspectionView.filterResults = function(result) {
    if (result.inspection_score <= 5) {
      $('#results-main').attr('class', 'low');
      $('.score img').attr('src', 'images/inspection-grade-png/doodle-smiley-icons-a.png');
    } else if (result.inspection_score <= 35) {
      $('#results-main').attr('class', 'moderate');
      $('.score img').attr('src', 'images/inspection-grade-png/doodle-smiley-icons-b-plus.png');
    } else if (result.inspection_score <= 45) {
      $('#results-main').attr('class', 'elevated');
      $('.score img').attr('src', 'images/inspection-grade-png/doodle-smiley-icons-b.png');
    } else if (result.inspection_score <= 90) {
      $('#results-main').attr('class', 'high');
      $('.score img').attr('src', 'images/inspection-grade-png/doodle-smiley-icons-c.png');
    } else {
      $('#results-main').attr('class', 'severe');
      $('.score img').attr('src', 'images/inspection-grade-png/doodle-smiley-icons-f.png');
    }
  };

  module.inspectionView = inspectionView;
})(window);
