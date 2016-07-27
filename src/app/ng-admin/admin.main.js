angular.module( 'ngBoilerplate.admin', [
    'firebase',
    'ui.router',
    'plusOne'
])
    //Admin
    .controller( 'AdminCtrl', function AdminCtrl($scope,$location,CommonProp,$firebase) {
        $scope.username = CommonProp.getUser();
        if(!$scope.username){
            $location.path('/home');
        }
        $scope.logout = function(){
            CommonProp.logoutUser();


        };
        var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/");


        var sync = $firebase(firebaseObj);

        $scope.element = sync.$asArray();
    });
