var proxy = require('http-proxy-middleware')
 
module.exports = function(app){
  app.use(proxy('/user', { target: 'http://localhost:8090/' }));
}
