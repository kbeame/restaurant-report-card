(function(module) {
  function Inspection (options) {
    Object.keys(options).forEach(function(element, index, keys){
      this[element] = options[element];
    },this);
  }

  Inspection.current = [];
  Inspection.names = [];

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

  Inspection.inputOptions = function() {
    $('#search-input').autocomplete(
      {
        source: Inspection.names,
        minLength: 3
      }
    );
  };

  Inspection.buildNames = function(callback) {
    $.get('/data/resource/gkhn-e8mn.json?$select=name&$group=name&$order=name&$limit=50000')
    .done(function(data, message, xhr) {
      Inspection.names = data.map(function(element){
        return element.name;
      });
      callback();
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
    if (place === ''){
      alert('Please enter a valid establishment name.');
      $('#search-input').val('');
    } else if (place.substring(0, 1) === ' ') {
      alert('No spaces at the beggining of an establishment name');
      $('#search-input').val('');
    }
    else {
      $.get('/data/resource/gkhn-e8mn.json?$select=name,inspection_date,inspection_score,address,city,zip_code,phone,latitude,longitude,violation_description&$order=inspection_date%20DESC&inspection_type=Routine%20Inspection/Field%20Review&$q=' + place)
      .done(function(data, message, xhr) {
        if (xhr.responseJSON.length === 0) {
          alert('No Inspection Data Available.');
          $('#search-input').val('');
        }
        else {
          historyInit.all = data;

          Inspection.current = new Inspection(data[0]);
          Inspection.current.inspection_date = Inspection.current.inspection_date.substring(0, 10);
          //store search into database
          Inspection.current.insertData();

          $('#report-card').empty()
          .append(inspectionView.displayResults(Inspection.current))
          .show().siblings().hide();

          inspectionView.filterResults(Inspection.current);
          mapView.updateMap(Inspection.current);
          history.pushState(null, null, '../reportcard/' + place);
          $('#search-input').val('');
          callback();
        }
      });
    }
  };

  Inspection.with = function(attr) {
    return Inspection.current[attr];
  };

  Inspection.createTable();
  Inspection.buildNames(Inspection.inputOptions);

  module.Inspection = Inspection;
})(window);
