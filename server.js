var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();


var proxyInspectionData = function(request, response) {
  console.log('Routing Inspection Data request for', request.params[0]);
  (requestProxy({
    url: 'https://data.kingcounty.gov/' + request.params[0],
    headers: { 'X-App-Token': process.env.RRC_TOKEN }
  }))(request, response);
};

app.get('/data/*', proxyInspectionData);

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
