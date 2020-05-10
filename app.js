import session from "express-session";
import swaggerUi from "swagger-ui-express";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var helmet = require("helmet");
var compression = require("compression");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var endpointOneRouter = require('./routes/endpoint-1');
var endpointTwoRouter = require('./routes/endpoint-2');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerui = require('swagger-ui-express')
var morgan = require("morgan")
var cors = require('cors')

const LoggerMiddleware = (req,res,next) =>{
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
  next();
}

var app = express();
app.use(LoggerMiddleware);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
  next();
});

app.use(morgan("common"));
app.use(helmet());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Custom API",
      description: "API Description",
      contact: {
        name: "Sumit Lahiri"
      },
      servers: ["endpoint-api.herokuapp.com"]
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: new Date(283402300000000),
    },
  }),
);

app.use(cors())
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocs));
app.use('/', indexRouter);
app.use('/endpoint-1', endpointOneRouter);
app.use('/endpoint-2', endpointTwoRouter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  next(createError(500));
});

app.use(function(req, res, next) {
  next(createError(422));
});

app.use(function(req, res, next) {
  next(createError(502));
});

app.use(function(req, res, next) {
  next(createError(401));
});

const customErrorHandler = (err, req, res, next) => {
  console.log(err.stack); 
  res.status(500).json({
    url : req.url,
    headers : req.headers,
    method : req.method,
    errors : err,
    timestamp : Date(Date.now()).toString()
  })
  next()
}

app.use(customErrorHandler);

module.exports = app;
