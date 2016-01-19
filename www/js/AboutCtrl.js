   app.controller('AboutCtrl', function ($scope,$ionicHistory) {

     $scope.goBack = function () {
       $ionicHistory.goBack();
     }

     $scope.groups = [];
     $scope.groups = [{
         name: 'Dia das crianças',
         items: 'Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais, das professoras, mas também é o dia dos animais, sempre que você olha uma criança, há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!'
       },
       {
         name: 'Neymar e Ganso',
         items: 'No meu xinélo da humildade eu gostaria muito de ver o Neymar e o Ganso. Por que eu acho que.... 11 entre 10 brasileiros gostariam. Você veja, eu já vi, parei de ver. Voltei a ver, e acho que o Neymar e o Ganso têm essa capacidade de fazer a gente olhar.'
       },
       {
         name: 'Internautas',
         items: 'Primeiro eu queria cumprimentar os internautas. -Oi Internautas! Depois dizer que o meio ambiente é sem dúvida nenhuma uma ameaça ao desenvolvimento sustentável. E isso significa que é uma ameaça pro futuro do nosso planeta e dos nossos países. O desemprego beira 20%, ou seja, 1 em cada 4 portugueses.'
       }];

     $scope.toggleGroup = function (group) {
       if ($scope.isGroupShown(group)) {
         $scope.shownGroup = null;
       } else {
         $scope.shownGroup = group;
       }
     };
     $scope.isGroupShown = function (group) {
       return $scope.shownGroup === group;
     };

   });