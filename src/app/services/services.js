angular.module( 'ngBoilerplate.services', [
  'ui.router',
  'placeholders'
])
    .controller( 'ServiceCtrl', function ServiceCtrl( $scope,CommonProp,$location ) {


    })

.controller( '[A]ServiceCtrl', function AServiceCtrl( $scope,CommonProp,$location ) {

      $scope.username = CommonProp.getUser();
      if(!$scope.username){
        $location.path('/home');
      }
      $scope.logout = function(){
        CommonProp.logoutUser();

      };
})

;
