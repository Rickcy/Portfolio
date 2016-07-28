

  angular.module( 'ngBoilerplate', [

    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.services',
    'ngBoilerplate.works',
    'ngBoilerplate.contacts',
    'ngBoilerplate.login',
    'ngBoilerplate.admin',
    'ngBoilerplate.reviews',

    'ui.router'])
        //config
      .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
        //HomeView
        $stateProvider.state( 'home', {
          url: '/home',
          views: {
            "main": {
              controller: 'HomeCtrl',
              templateUrl: 'home/home.tpl.html'
            },

            "menu":  {
              templateUrl: 'navBar/navBa.tpl.html'
            }
          },
          data:{ pageTitle: 'Home' }
        });

        //ServiceView
        $stateProvider.state( 'services', {
          url: '/services',
          views: {
              "main": {
                        controller: 'ServiceCtrl',
                        templateUrl: 'services/services.tpl.html'
                      },
              "menu":  {
                templateUrl: 'navBar/navBa.tpl.html'
                        }

          },
          data:{ pageTitle: 'Services' }
        });


        //WorksView
        $stateProvider.state( 'works', {
          url: '/works',
          views: {
            "main": {
              controller: 'WorksCtrl',
              templateUrl: 'works/works.tpl.html'
            },
            "menu":  {
              templateUrl: 'navBar/navBa.tpl.html'
            }
          },
          data:{ pageTitle: 'Works' }
        });

        //ReviewView
        $stateProvider.state( 'reviews', {
          url: '/reviews',
          views: {
            "main": {
              controller: 'ReviewsCtrl',
              templateUrl: 'reviews/reviews.tpl.html'
            },
            "menu":  {
              templateUrl: 'navBar/navBa.tpl.html'
            }
          },
          data:{ pageTitle: 'Reviews' }
        });

        //ContactsView
        $stateProvider.state( 'contacts', {
          url: '/contacts',
          views: {
            "main": {
              controller: 'ContactsCtrl',
              templateUrl: 'contacts/contacts.tpl.html'
            },
            "menu":  {
              templateUrl: 'navBar/navBa.tpl.html'
            }
          },
          data:{ pageTitle: 'Contacts' }
        });

        //LoginView
        $stateProvider.state( 'login', {
          url: '/login',
          views: {
            "main": {
              controller: 'LoginCtrl',
              templateUrl: 'ng-admin/ng-login.tpl.html'
            }
          },
          data:{ pageTitle: 'Login' }
        });

        //AdminDashboardView
        $stateProvider.state( 'admin', {
          url: '/ng-app-admin',
          views: {
            "main": {
              controller: 'AdminCtrl',
              templateUrl: 'ng-admin/admin.main.tpl.html'
            },
            "menu":  {
              controller: 'AdminCtrl',
              templateUrl: 'navBar/navBaAdmin.tpl.html'
            }
          },
          data:{ pageTitle: 'Admin' }
        });

        //AdminServicesView
        $stateProvider.state( 'adminServices', {
          url: '/ng-app-admin-service',
          views: {
            "main": {
              controller: '[A]ServiceCtrl',
              templateUrl: 'services/adminService.tpl.html'
            },
            "menu":  {
              controller: '[A]ServiceCtrl',
              templateUrl: 'navBar/navBaAdmin.tpl.html'
            }
          },
          data:{ pageTitle: 'AdminServices' }
        });

        //AdminWorksView
        $stateProvider.state( 'adminWorks', {
          url: '/ng-app-admin-works',
          views: {
            "main": {
              controller: '[A]WorksCtrl',
              templateUrl: 'works/adminWorks.tpl.html'
            },
            "menu":  {
              controller: '[A]WorksCtrl',
              templateUrl: 'navBar/navBaAdmin.tpl.html'
            }
          },
          data:{ pageTitle: 'AdminWorks' }
        });

        //AdminReviewsView
        $stateProvider.state( 'adminReviews', {
          url: '/ng-app-admin-reviews',
          views: {
            "main": {
              controller: '[A]ReviewsCtrl',
              templateUrl: 'reviews/adminReview.tpl.html'
            },
            "menu":  {
              controller: '[A]ReviewsCtrl',
              templateUrl: 'navBar/navBaAdmin.tpl.html'
            }
          },
          data:{ pageTitle: 'AdminReviews' }
        });

        //AdminContactsView
        $stateProvider.state( 'adminContacts', {
          url: '/ng-app-admin-contacts',
          views: {
            "main": {
              controller: '[A]ContactsCtrl',
              templateUrl: 'contacts/adminContacts.tpl.html'
            },
            "menu":  {
              controller: '[A]ContactsCtrl',
              templateUrl: 'navBar/navBaAdmin.tpl.html'
            }
          },
          data:{ pageTitle: 'AdminContacts' }
        });
      })

      .run( function run () {
      })

      .controller( 'AppCtrl',function($scope,$location,CommonProp,$window) {


        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | Page personal Portfolio' ;
      }
    });
  });





