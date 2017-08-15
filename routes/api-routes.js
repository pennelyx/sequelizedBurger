var db = require("../models");

module.exports = function(app) {

	app.get("/", function(req, res) {
		db.burgerSequelize.findAll({}).then(function(dbData){
			var devouredBurger = [];
			var unDevouredBurger = [];
			for (i = 0; i<dbData.length; i++) {
				if(dbData[i].devoured == 0){
					unDevouredBurger.push(dbData[i]);
				}
				else {
					devouredBurger.push(dbData[i]);
				}
			}
			var hbsObject = {
				devouredBurger: devouredBurger,
				unDevouredBurger: unDevouredBurger
			};

			res.render("index",hbsObject);
		})
	});

	app.post("/", function(req, res) {
    	db.burgerSequelize.create({
      	burger_name: req.body.burger_name,
		devoured: false
    }).then(function(dbTodo){
      	res.redirect("/");
    });
  	});

  	app.put("/:id", function(req, res) {
	    var condition = "id = " + req.params.id;
		var newVal = "devoured = " + req.body.devoured;
		console.log(newVal + condition);
		//console.log(req.body);
		db.burgerSequelize.update({
	      burger_name: req.body.burger_name,
	      devoured:req.body.devoured
	    }, {
	      where: {
	        id: req.params.id
	      }
	    }).then(function(dbTodo) {
	      res.redirect("/");
	    });


  });


}