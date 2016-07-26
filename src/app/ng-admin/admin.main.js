angular.module( 'ngBoilerplate.admin', [
    'firebase',
    'ui.router',
    'plusOne'
])
    //Admin
    .controller( 'AdminCtrl', function AdminCtrl($scope,$location,CommonProp,$firebaseAuth,$window) {
        $scope.username = CommonProp.getUser();
        if(!$scope.username){
            $location.path('/home');
        }
        $scope.logout = function(){
            CommonProp.logoutUser();

        };
    });
