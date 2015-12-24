app.controller('SignUpCtrl', function($scope, $state, $ionicHistory) {
  
  $scope.goBack = function(){
    $ionicHistory.goBack();
  }
});