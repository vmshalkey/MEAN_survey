app.controller('MainController', function(UserFactory, PollFactory, $scope){
	console.log("MainController Loaded");

	$scope.loginUser = function() {
		UserFactory.loginUser(function(user) {
			$scope.loggedUser = user;
			console.log("C | CTRL | loginUser", $scope.loggedUser);
		});
	}
});