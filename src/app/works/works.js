angular.module( 'ngBoilerplate.works', [
    'ui.router',
    'placeholders'
])


    .controller( 'WorksCtrl', function WorksCtrl( $scope ) {

        $scope.console = 'OK';
        $scope.dropdownDemoItems = [
            "The first choice!",
            "And another choice for you.",
            "but wait! A third!"
        ];
    })

;
