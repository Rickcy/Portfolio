angular.module( 'ngBoilerplate.contacts', [
    'ui.router',
    'placeholders'
])


    .controller( 'ContactsCtrl', function ContactsCtrl( $scope ) {

        $scope.console = 'OK';
        $scope.dropdownDemoItems = [
            "The first choice!",
            "And another choice for you.",
            "but wait! A third!"
        ];
    })

;
