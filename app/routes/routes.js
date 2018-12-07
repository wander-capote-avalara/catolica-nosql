'use strict';
module.exports = function (app) {
	var carController = require('../controllers/car');

	app.route('/api/vehicles')
		.get(carController.get)
		.post(carController.add);

	app.route('/api/vehicles/:id')
		.get(carController.getById)
		.put(carController.update)
		.delete(carController.delete);
};