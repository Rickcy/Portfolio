angular.module( 'ngBoilerplate.contacts', [
    'ui.router',
    'placeholders'
])
    .controller( 'ContactsCtrl', function ContactsCtrl( $scope,CommonProp,$location ) {

    })

    .controller( '[A]ContactsCtrl', function AContactsCtrl( $scope,CommonProp,$location ) {
        $scope.username = CommonProp.getUser();
        if(!$scope.username){
            $location.path('/home');
        }
        $scope.logout = function(){
            CommonProp.logoutUser();

        };
    })

;
