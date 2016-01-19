app.controller('FriendsCtrl', function ($scope, $state, $ionicHistory, $cordovaContacts, $ionicPlatform) {

  $scope.goBack = function () {
    $ionicHistory.goBack();
  }

  $scope.getAllContacts = function () {
    $cordovaContacts.find({}).then(function (allContacts) { //omitting parameter to .find() causes all contacts to be returned
      $scope.contacts = allContacts;
    })
  }

  $scope.getAllContacts();

  $scope.sendSMS = function (phonenumber) {
    $cordovaSms
      .send(phonenumber, 'SMS content', options)
      .then(function () {
        alert('BLZ');
      }, function (error) {
        alert('AFF');
      });
  }


});