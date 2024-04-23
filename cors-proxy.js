const corsAnywhere = require('cors-anywhere');

corsAnywhere.createServer({
  originWhitelist: ['http://localhost:3000'], // Replace with your application's origin
  removeHeaders: ['cookie', 'cookie2']
}).listen(8080, function() {
  console.log('CORS Anywhere server started on port 8080');
});