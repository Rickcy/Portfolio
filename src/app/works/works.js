angular.module( 'ngBoilerplate.works', [
    'ui.router',
    'placeholders'
])
    .controller( 'WorksCtrl', function WorksCtrl( $scope,CommonProp,$location ) {

    })


    .controller( '[A]WorksCtrl', function AWorksCtrl( $scope,CommonProp,$location ) {
        $scope.username = CommonProp.getUser();
        if(!$scope.username){
            $location.path('/home');
        }
        $scope.logout = function(){
            CommonProp.logoutUser();

        };
    })

;
