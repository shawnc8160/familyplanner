/*=====================================
  Imports
=====================================*/
const express = require('express');
const morgan = require('morgan');
const promise = require('bluebird');
const session = require('express-session');

const app = express();

app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

/*=====================================
  MiddleWare and Dependencies
=====================================*/
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan('tiny'));

/*=====================================
  Controllers
=====================================*/
const userController = require('./controllers/users.js');
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

const eventtypeController = require('./controllers/eventtype.js');
app.use('/eventtype', eventtypeController);

const eventsController = require('./controllers/events.js');
app.use('/events', eventsController);
/*=====================================
  Constants
=====================================*/
const port = process.env.PORT || 3000;


/*=====================================
  Start listener
=====================================*/
app.listen(port, () => {
  console.log('listening......');
});
