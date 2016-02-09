var polls = require('../controllers/polls.js');

module.exports = function(app){
	app.post("/polls", function(req, res){
		polls.create(req, res);
	});
	app.get("/polls", function(req, res){
		polls.read(req, res);
	});
	app.get("/polls/:id/read_one", function(req, res){
		polls.read_one(req, res);
	});
	app.get("/polls/:id/delete", function(req, res){
		polls.delete(req, res);
	});
	app.get("/polls/:id/:option/update", function(req, res){
		polls.update(req, res);
	});
};