app.controller('ReportProblemCtrl', function ($scope, $ionicHistory, $cordovaEmailComposer, $state, $ionicPopup, $timeout) {

  $scope.goBack = function () {
    $ionicHistory.goBack();
  }

  $scope.showAlertSuccess = function () {
    var alertPopup = $ionicPopup.show({
      title: '<div class="text-center"><i class="ion-android-done big-icon green-icon"></i></div>',
      template: 'Obrigado por entrar em contato conosco :)'
    });
    $timeout(function () {
      alertPopup.close(); 
    }, 3000);
  };

  $scope.report = function (subject, problem) {
    var email = {
      to: 'guilhermehenriquedias@hotmail.com',
      subject: subject,
      body: problem,
      isHtml: true
    };

    $cordovaEmailComposer.open(email).then(null, function () {
      $state.go('config');
      $scope.showAlertSuccess();
    });
  }

});