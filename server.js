//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
console.log(path.join(__dirname, '/dist/reddit-web-app'));
app.use(path.join(__dirname, '/dist/reddit-web-app'));

app.get('/*', function(req,res) {
  console.log(path.join(__dirname,'/dist/reddit-web-app/index.html'));
  //console.log(express.static(path.join(__dirname,'/dist/reddit-web-app/index.html')));

  res.sendFile(path.join(__dirname,'/dist/reddit-web-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
