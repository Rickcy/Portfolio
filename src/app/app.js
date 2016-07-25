angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.services',
  'ui.router'
])
//config
.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
      $stateProvider.state( 'home', {
        url: '/home',
        views: {
          "main": {
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html'
          }
        },
        data:{ pageTitle: 'Home' }
      });
      $stateProvider.state( 'services', {
        url: '/services',
        views: {
          "main": {
            controller: 'ServiceCtrl',
            templateUrl: 'services/services.tpl.html'
          }
        },
        data:{ pageTitle: 'Services' }
      });

})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Page personal Portfolio' ;
    }
  });
})

;

