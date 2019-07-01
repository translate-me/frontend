var proxy = require('http-proxy-middleware')
 
module.exports = function(app){
  app.use(proxy('/user', { target: 'http://authentication_django:8090' }));
  app.use(proxy('/text', { target: 'http://django_translate:9000' }));
}
