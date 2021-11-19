const app = require('express')();
const mongoose = require('mongoose');
const cors = require('cors');

//Connect the DB

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connect.on('connected', () => {
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});
mongoose.Promise = global.Promise;

//

var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));

app.use('/productapi',require('./routes/product_routes.js'));
app.use('/cartapi',require('./routes/cart_routes.js'));

// error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(4000, () => {
    console.log('Server is running on 4000');
});