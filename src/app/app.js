(function(){
  'use strict';
  angular.module( 'ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.services',
    'ngBoilerplate.works',
    'ngBoilerplate.contacts',
    'ngBoilerplate.admin',
    'ui.router'])
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
        $stateProvider.state( 'works', {
          url: '/works',
          views: {
            "main": {
              controller: 'WorksCtrl',
              templateUrl: 'works/works.tpl.html'
            }
          },
          data:{ pageTitle: 'Works' }
        });
        $stateProvider.state( 'contacts', {
          url: '/contacts',
          views: {
            "main": {
              controller: 'ContactsCtrl',
              templateUrl: 'contacts/contacts.tpl.html'
            }
          },
          data:{ pageTitle: 'Contacts' }
        });
        $stateProvider.state( 'admin', {
          url: '/ng-admin',
          views: {
            "main": {
              controller: 'AdminCtrl',
              templateUrl: 'ng-admin/ng-admin.tpl.html'
            }
          },
          data:{ pageTitle: 'Admin' }
        });

      })

      .run( function run () {
      })

      .controller( 'AppCtrl',AppCtrl);
  AppCtrl.$inject  = ['$location','$scope'];
  function AppCtrl($location,$scope){
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | Page personal Portfolio' ;
      }
    });
  }




})();
