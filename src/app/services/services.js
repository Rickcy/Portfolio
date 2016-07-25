angular.module( 'ngBoilerplate.services', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])


.controller( 'ServiceCtrl', function AboutCtrl( $scope ) {

      $scope.console = 'OK';
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
