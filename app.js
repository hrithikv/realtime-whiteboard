
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
...

app.use('/', index);
app.use('/systemadmin', systemAdminRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // next is the last argument in above function
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  debug(err); // nothing logs here 
  debug(err.message);
  debug(err.name);
  debug(err.errorCode);
  debug(err.stack);
  // render the error page
  res.status(err.status || 500);
  res.send({error: err.message}); //this never gets called
});

module.exports = app;
