app.service('ProfilePictureService', function ($cordovaCamera, $cordovaImagePicker, $ionicPlatform) {

this.takePicture = function (successCallback, errorCallback) {
    var options = {
      quality: 100,
     destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function (imageData) {
      var image = imageData;
      successCallback(image);
    }, function (err) {
      errorCallback();
    });

  };

  this.getFromGallery = function (successCallback, errorCallback) {
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function (imageData) {
      var image = imageData;
      successCallback(image);
    }, function (err) {
      errorCallback();
    });
  };
});