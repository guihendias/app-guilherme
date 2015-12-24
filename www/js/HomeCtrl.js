app.controller('HomeCtrl', function ($scope, UserService, $ionicPopup, $state, $ionicLoading) {
  $scope.user = UserService.getUser();

  $scope.showLogOutMenu = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Logout',
      template: '<div class="text-center">Deseja realmente sair?</div>',
      okText: 'Sim',
      cancelText: 'Cancelar'
    });

    confirmPopup.then(function (res) {
      if (res) {
        facebookConnectPlugin.logout(function () {
          $state.go('welcome');
          console.log('You are sure');
        })
      } else {
        return true;
        console.log('You are not sure');
      }
    })
  }
});