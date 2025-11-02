const http = require('http');

http.get({ hostname: 'localhost', port: 3000, path: '/' }, res => {
  console.log('statusCode:', res.statusCode);
  res.on('data', d => process.stdout.write(d));
}).on('error', e => {
  console.error(e);
});
