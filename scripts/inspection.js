(function(module) {
  function Inspection (options) {
    Object.keys(options).forEach(function(element, index, keys){
      this[element] = options[element];
    },this);
  }
  Inspection.current =[];
  Inspection.names =[];

  Inspection.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS recentInspect (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR(255), ' +
      'inspection_date DATETIME, ' +
      'inspection_score INTEGER, ' +
      'address VARCHAR(255), ' +
      'city VARCHAR(255), ' +
      'zip_code VARCHAR(255), ' +
      'phone VARCHAR(255), ' +
      'latitude DECIMAL(18,12), ' +
      'longitude DECIMAL(18,12));',
      callback
    );
  };
  Inspection.buildNames = function (anything) {
    $.get('/data/resource/gkhn-e8mn.json?$select=name&$group=name&$order=name&$limit=50000')
    .done(function(data, message, xhr) {
      Inspection.names = data.map(function(element){
        return element.name;
      });
      console.log('generated array for inspeciton.names');
      anything();
    });
  };

  Inspection.prototype.insertData = function(callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO recentInspect (name, inspection_date, inspection_score, address, city, zip_code, phone, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
          'data': [this.name, this.inspection_date, this.inspection_score, this.address, this. city, this.zip_code, this.phone, this.latitude, this.longitude],
        }
      ],
      callback
    );
  };

  Inspection.requestInspectionData = function(place, callback) {

    $.get('/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,address,city,zip_code,phone,latitude,longitude&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&$q=' + place + '&$limit=1')
      .done(function(data, message, xhr) {
        Inspection.current = data;
        data.forEach(function (item) {
          var total = new Inspection(item);
          console.log('item:' + item);
          //cache the data into the currently empty array
          total.insertData();
        });
        $('#report-card').empty().append(inspectionView.displayResults(Inspection.current[0]));
        inspectionView.filterResults(Inspection.current[0]);
        mapView.updateMap();
      }).done(callback);
  };

  Inspection.with = function(attr) {
    console.log('inspection function');
    return Inspection.current.filter(function(inspection){
      return inspection[attr];
      console.log(Inspection.current);
    });
  };

  Inspection.inputOptions = function() {
    $('#search-input').autocomplete({
      source: Inspection.names,
      minLength: 3
    });
  };

  // $('.restaurant-search').on('submit', function(event) {
  //   event.preventDefault();
  //   var restName = $('#search-input').val();
  //   restName = restName.replace(/[^\w\s]/gi, ' ');
  //   console.log('This is the restName:' + restName);
  //   Inspection.requestInspectionData(restName, Inspection.with);
  //   historyInit.requestHistoryData(restName);
  // });


  module.Inspection = Inspection;
})(window);
