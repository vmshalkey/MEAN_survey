var mongoose = require('mongoose');
var Poll = mongoose.model("Poll");

module.exports = (function(){
	return {
		create: function(req, res){
			console.log('S | CTRL | Create Poll' , req.body);
			var poll = new Poll({
				name: req.body.name,
				question: req.body.question,
				option_1: {
							text: req.body.option_1.text,
							votes: req.body.option_1.votes
						},
				option_2: {
							text: req.body.option_2.text,
							votes: req.body.option_2.votes
						},
				option_3: {
							text: req.body.option_3.text,
							votes: req.body.option_3.votes
						},
				option_4: {
							text: req.body.option_4.text,
							votes: req.body.option_4.votes
						},
				created_at: new Date()
			})
			poll.save(function (err) {
				if(err){
					console.log(err);
					res.json({});
				}
				res.json({});
			})
		},
		read: function(req, res){
			Poll.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		read_one: function(req, res){
			Poll.find({_id: req.params.id}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		update: function(req, res){
			console.log('S | CTRL | Update Poll', req.params.id, req.params.option);
			if(req.params.option === "1") {
				Poll.update({_id: req.params.id}, { $inc: { "option_1.votes": 1}}, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			}
			else if(req.params.option === "2") {
				Poll.update({_id: req.params.id}, { $inc: { "option_2.votes": 1}}, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			} else if(req.params.option === "3") {
				Poll.update({_id: req.params.id}, { $inc: { "option_3.votes": 1}}, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			} else if(req.params.option === "4") {
				Poll.update({_id: req.params.id}, { $inc: { "option_4.votes": 1}}, function(err){
					if(err){
						console.log(err);
					}
					res.json({});
				})
			}
		},
		delete: function(req, res){
			console.log('S | CTRL | Delete Poll', req.params.id);
			Poll.remove({_id: req.params.id}, function(err){
				if(err){
					console.log(err);
				}
				res.json({});
			})
		}
	}
})()