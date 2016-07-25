angular.module( 'ngBoilerplate.services', [
  'ui.router',
  'placeholders'
])


.controller( 'ServiceCtrl', function ServiceCtrl( $scope ) {

      $scope.console = 'OK';
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
