let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
let path = require('path')
let createError = require('http-errors')
let config = require('./environment')
let PORT = config.PORT || 3001
let logger = require('morgan')

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "*");
  next();
})
// view engine setup
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');
// Require static assets from public folder
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/api', require('./router').ROUTER(express.Router()))

let appConfig = require('./config/app.config')

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log("Server started at port " + PORT)
})
