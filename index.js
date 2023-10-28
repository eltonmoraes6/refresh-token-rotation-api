const http = require('http');

const { app } = require('./src/app');
const { connectDB } = require('./src/config/database');

//settings
const port = process.env.PORT || 5000;
const server = http.createServer(app);

//Connect to the database before listening
connectDB().then(() => {
  server.listen(port, () => {
    let FuncPort = server.address().port;
    let host = server.address().address;
    let family = server.address().family;
    console.log(
      'Server listening for requests at http://%s:%s',
      host,
      FuncPort,
      family
    );
    console.log(new Date().toUTCString());
    console.log('Environment: ', process.env.NODE_ENV);
  });
});
