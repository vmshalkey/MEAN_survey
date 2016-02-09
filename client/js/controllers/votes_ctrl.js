app.controller('VotesController', function(UserFactory, PollFactory, $scope){
	console.log("VotesController Loaded");

	UserFactory.loginUser(function(user) {
		$scope.loggedUser = user;
		console.log($scope.loggedUser);
		return $scope.loggedUser
	});
	PollFactory.showPoll(function(poll) {
		$scope.poll = poll;
		console.log("This is the poll that should be displayed ", $scope.poll);
	});
	$scope.updatePoll = function(id, option) {

		PollFactory.updatePoll(id, option, function() {
			console.log("C | CTRL | updatePoll");

		})
	}
});