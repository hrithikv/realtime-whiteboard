
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
...

app.use('/', index);
app.use('/systemadmin', systemAdminRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  debug(err); 
  debug(err.message);
  debug(err.name);
  debug(err.errorCode);
  debug(err.stack);
  res.status(err.status || 500);
  res.send({error: err.message}); 
});

module.exports = app;
