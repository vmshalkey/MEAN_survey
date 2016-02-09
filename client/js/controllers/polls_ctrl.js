app.controller('PollsController', function(UserFactory, PollFactory, $scope){
	console.log("PollsController Loaded");

	UserFactory.loginUser(function(user) {
		$scope.loggedUser = user;
		console.log($scope.loggedUser);
		return $scope.loggedUser
	});
	PollFactory.readPolls(function(data) {
		$scope.polls = data;
	});
	$scope.createPoll = function() {
		console.log("C | CTRL | createPoll", $scope.new_poll);
		$scope.new_poll.name = $scope.loggedUser;
		$scope.new_poll.option_1.votes = 0;
		$scope.new_poll.option_2.votes = 0;
		$scope.new_poll.option_3.votes = 0;
		$scope.new_poll.option_4.votes = 0;
		PollFactory.createPoll($scope.new_poll, function() {
			$scope.polls = PollFactory.readPolls(function(data) {
				$scope.polls = data;
			});
		});
	}
});