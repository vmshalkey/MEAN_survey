app.controller('DashboardController', function(UserFactory, PollFactory, $scope){
	console.log("DashboardController Loaded");

	UserFactory.loginUser(function(user) {
		$scope.loggedUser = user;
		console.log($scope.loggedUser);
	});
	$scope.loginUser = function() {
		UserFactory.loginUser(function(user) {
			$scope.loggedUser = user;
			console.log("C | CTRL | loginUser", $scope.loggedUser);
		});
	}
	$scope.logoutUser = function() {
		console.log("C | CTRL | logoutUser", $scope.loggedUser);
		UserFactory.logoutUser(function(user) {
			$scope.loggedUser = user;
			console.log("LoggedUser: ", $scope.loggedUser);
		});
	}
	PollFactory.readPolls(function(data) {
		$scope.polls = data;
	});
	$scope.getPoll = function(id) {
		PollFactory.getPoll(id, function(data) {
			$scope.poll = data;
			console.log("The Current Poll is ", $scope.poll)
		});
	}
	$scope.deletePoll = function(id) {
		PollFactory.deletePoll(id, function() {
			console.log("C | CTRL | deletePoll");
			$scope.polls = PollFactory.readPolls(function(data) {
				$scope.polls = data;
			});
		})
	}
});