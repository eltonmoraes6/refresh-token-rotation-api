require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const errorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use(require('./routers'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

// handling errors
app.use(errorHandler);

module.exports = { app };
