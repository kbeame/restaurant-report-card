var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();


// app.get('*', function(request, response) {
//   console.log('New request', request.url);
//   response.sendFile('index.html', { root: '.' });
// });

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
