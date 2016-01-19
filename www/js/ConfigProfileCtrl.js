app.controller('ConfigProfileCtrl', function ($scope, $state, $ionicHistory, UserService) {

  $scope.goBack = function () {
    $ionicHistory.goBack();
  }
  
  $scope.user = UserService.getUser();
  
});