const path = require('path');

const config = {
	port: {
		http: 3000,
		ws: 3001,
	},
	watchFolder: path.resolve(__dirname, '../../src'),
}
module.exports = config