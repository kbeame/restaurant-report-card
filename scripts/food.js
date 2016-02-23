(function(module) {
  function Inspection (options) {
    Object.keys(options).forEach(function(element, index, keys){
      this[element] = options[element];
    },this);
  }
  Inspection.all =[];

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
        Inspection.all = data;
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
    return Inspection.all.filter(function(inspection){
      return inspection[attr];
      console.log(Inspection.all);
    });
  };

  $('.restaurant-search').on('submit', function(event) {
    event.preventDefault();
    var restName = $('#search-input').val();
    console.log('This is the restName:' + restName);
    Inspection.requestInspectionData(restName, Inspection.with);
  });

  module.Inspection = Inspection;
})(window);
