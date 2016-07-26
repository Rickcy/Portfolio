angular.module( 'ngBoilerplate.reviews', [
    'ui.router',
    'placeholders'
])

    .controller( 'ReviewsCtrl', function ReviewsCtrl( $scope,CommonProp,$location ) {

    })


    .controller( '[A]ReviewsCtrl', function AReviewsCtrl( $scope,CommonProp,$location ) {
        $scope.username = CommonProp.getUser();
        if(!$scope.username){
            $location.path('/home');
        }
        $scope.logout = function(){
            CommonProp.logoutUser();

        };
    })

;
