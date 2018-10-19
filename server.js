
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist/whiteboard-client-angular')));

app.get('/*', function(req,res) {

  res.sendFile(express.static(path.join(__dirname,'/dist/whiteboard-client-angular/index.html')));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
