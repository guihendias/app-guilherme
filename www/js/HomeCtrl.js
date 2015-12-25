app.controller('HomeCtrl', function ($scope, UserService, $ionicPopup, $state, $ionicLoading, $cordovaEmailComposer) {
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
  var email = {
    to: 'guilhermehenriquedias@hotmail.com',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
    attachments: [
      'file://img/logo.png',
      'res://icon.png',
      'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      'file://README.pdf'
    ],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  };

  $scope.send = function () {
    $cordovaEmailComposer.open(email).then(function(){
      alert("Enviado com suceso");
    }, function () {
      alert("Erro ao enviar o email");
    });
  }
});