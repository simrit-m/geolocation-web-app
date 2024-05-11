const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/geocode',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/reverse_geocode',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/calculate_distance',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000',
      changeOrigin: true,
    })
  );
};
