//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
console.log(path.join(__dirname, '/dist/reddit-web-app'));
app.use(express.static(path.join(__dirname, '/dist/reddit-web-app')));

app.get('/*', function(req,res) {

  res.sendFile(express.static(path.join(__dirname,'/dist/reddit-web-app/index.html')));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
