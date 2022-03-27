const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/', {
			target: 'https://testnets-api.opensea.io/',
			changeOrigin: true
		})
	);
};
