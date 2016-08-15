angular.module('app')
.controller('homeController', function($scope, userService, $state) {
  $scope.test = 'Hi!!';

  $scope.user = 'NOT LOGGED IN';

  function getUser() {
    userService.getUser().then(function(user) {
      if (user) $scope.user = user.username;
    })
  }

  getUser();

  $scope.loginLocal = function(username, password) {
    console.log('Logging in with', username, password);
    userService.loginLocal({
      username: username,
      password: password
    })
    .then(function(res) {
      getUser();
    })
  }

  $scope.logout = userService.logout;


})
