
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])


.controller( 'HomeCtrl', function HomeController( $scope,CommonProp ) {
      $scope.console = 'OK';

})

;

