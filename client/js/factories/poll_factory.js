app.factory('PollFactory', function($http, $location) {
	var factory = {};
	console.log("PollFactory")
	factory.currentPoll = false;

	factory.createPoll = function(info, callback){
		$http.post('/polls', info).success(function(output){
			callback();
			$location.path('/dashboard');
			console.log("createPoll", output);
		})
	}
	factory.readPolls = function(callback){
		console.log("Got to Factory readPolls");
		$http.get('/polls').success(function(output){
			polls = output;
			callback(polls);
			console.log("readPolls", output);
		})
	}
	factory.getPoll = function(id, callback){
		$http.get('/polls/'+id+'/read_one').success(function(output){
			poll = output;
			callback(poll);
			factory.currentPoll = poll;
			console.log("readPoll", output);
			$location.path('/votes');
		})
	}
	factory.showPoll = function(callback){
		return callback(factory.currentPoll);
	}
	factory.updatePoll = function(id, option, callback){
		$http.get('/polls/'+id+'/'+option+'/update').success(function(output){
			callback();
			$location.path('/dashboard');
		})
	}
	factory.deletePoll = function(id, callback){
		$http.get('/polls/'+id+'/delete').success(function(output){
			callback();
		})
	}
	return factory;
});