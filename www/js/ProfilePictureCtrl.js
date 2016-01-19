  app.controller('ProfilePictureCtrl', function ($scope, ProfilePictureService, $ionicHistory) {

    $scope.goBack = function () {
      $ionicHistory.goBack();
    }

    $scope.getFromGallery = function () {
      ProfilePictureService.getFromGallery($scope.successCallback, $scope.errorCallback);
    }

    $scope.takePicture = function () {
      ProfilePictureService.takePicture($scope.successCallback, $scope.errorCallback);
    }

    $scope.successCallback = function () {
      alert("Sucesso");
    }

    $scope.errorCallback = function () {
      alert("Erro");
    }
  });