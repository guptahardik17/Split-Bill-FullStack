const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connection = require('./config/dbconn');


connection.connect(function(err) {
  if(!err) console.log("Connected DB!");
});

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
// Express body parser
app.use(express.urlencoded({ extended: true }));


// User Routes
app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
