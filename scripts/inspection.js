(function(module) {
  function Inspection (options) {
    Object.keys(options).forEach(function(element, index, keys){
      this[element] = options[element];
    },this);
  }
  Inspection.current =[];

  Inspection.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS recentInspect (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR(255), ' +
      'inspection_date DATETIME, ' +
      'inspection_score INTEGER, ' +
      'latitude DECIMAL(18,12), ' +
      'longitude DECIMAL(18,12));',
      callback
    );
  };

  Inspection.prototype.insertData = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO recentInspect (name, inspection_date, inspection_score, latitude, longitude) VALUES (?, ?, ?, ?, ?);',
          'data': [this.name, this.inspection_date, this.inspection_score, this.latitude, this.longitude],
        }
      ],
      callback
    );
  };

  Inspection.createTable();

  Inspection.requestInspectionData = function(place, callback) {

    $.get('/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,latitude,longitude&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&$q=' + place + '&$limit=1')
      .done(function(data, message, xhr) {
        Inspection.current = data;
        data.forEach(function (item) {
          var total = new Inspection(item);
          console.log('item:' + item);
          //cache the data into the currently empty array
          total.insertData();
        });
      }).done(callback);
  };

  Inspection.with = function(attr) {
    console.log('inspection function');
    return Inspection.current.filter(function(inspection){
      return inspection[attr];
      console.log(Inspection.current);
    });
  };


  $('#search-input').autocomplete({
    source: function(request, response) {
      $.ajax({
        url: 'https://data.kingcounty.gov/resource/gkhn-e8mn',
        data: {
          $q: request.term
        },
        dataType: 'json',
      }).success(function(data) {
        var results = $.map(data.items, function(id) {
          return id.name;
        });
        response(results);
      });
    },
    minLength:3,
    select: function (event, ui) {
      console.log( ui.item ?
          'Selected: ' + ui.item.label :
          'Nothing selected, input was ' + this.text);
    },
    open: function() {
      $(this).removeClass('ui-corner-all').addClass('ui-corner-top');
    },
    close: function() {
      $(this).removeClass('ui-corner-top').addClass('ui-corner-all');
    }
  });



  $('.restaurant-search').on('submit', function(event) {
    event.preventDefault();
    var restName = $('#search-input').val();
    restName = restName.replace(/[^\w\s]/gi, '');
    console.log('This is the restName:' + restName);
    Inspection.requestInspectionData(restName, Inspection.with);
  });

  module.Inspection = Inspection;
})(window);
