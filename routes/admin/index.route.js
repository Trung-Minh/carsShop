const test = require("./test.route");

module.exports = (app) => {
	app.use(`/admin`, test);
};
