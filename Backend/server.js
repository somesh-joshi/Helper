const app = require('express')();
const mongoose = require('mongoose');
const cors = require('cors');

//Connect the DB

mongoose.connect('mongodb://localhost/test')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));


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

app.use('/employees', require('./routers/emp_router'));
app.use('/users', require('./routers/user_router'));
app.use('/task', require('./routers/task_router'));

// error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(4000, () => {
    console.log('Server is running on 4000');
});