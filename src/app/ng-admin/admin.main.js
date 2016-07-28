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
        var firebaseObjService = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/");


        var syncService = $firebase(firebaseObjService);

        $scope.ServiceName = syncService.$asArray();


        var firebaseObjSkills = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/");


        var syncSkills = $firebase(firebaseObjSkills);

        $scope.SkillsName = syncSkills.$asArray();

    });
