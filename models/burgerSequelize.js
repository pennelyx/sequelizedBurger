module.exports = function(sequelize, Sequelize) {
	var BurgerSequelize = sequelize.define('burgerSequelize', {
		// id: {
		// 	autoIcrement: true,
		// 	primaryKey: true,
		// 	type: Sequelize.INTEGER
		// },
		burger_name: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		devoured: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		}
	});
	return BurgerSequelize;
}