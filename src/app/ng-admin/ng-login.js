
    angular.module( 'ngBoilerplate.login', [
        'firebase',
        'ui.router',
        'plusOne'
    ])
            //LoginApp
        .controller( 'LoginCtrl', function LoginCtrl($scope,$location,CommonProp,$firebaseAuth,$window) {

            var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com");
            var loginObj = $firebaseAuth(firebaseObj);

            loginObj.$onAuth(function(authData) {
                if(authData){
                    CommonProp.setUser(authData.password.email);
                    $location.path('/admin');
                }
            });

            $scope.user = {};
            var login={};

            $scope.test = function(){
                login.loading = true;
            };
            //Аутентификация, используя email и пароль
            //Auth using email and pass
            $scope.login=login;
            $scope.SignIn = function(e) {
                login.loading = true;
                e.preventDefault();
                var username = $scope.user.email;
                var password = $scope.user.password;
                loginObj.$authWithPassword({
                    email: username,
                    password: password
                })
                    .then(function (user) {
                        //Success callback
                        login.loading = false;
                        console.log('Authentication successful');
                        CommonProp.setUser(user.password.email);
                        $location.path('/ng-app-admin');

                    }, function (error) {
                        //Failure callback
                        login.loading = false;
                        $location.path('/home');
                        console.log('Authentication failure');
                    });
              };
        })



    .service('CommonProp',function($location,$firebaseAuth,$window) {
        var user = '';
        var firebaseObj = new Firebase("blinding-torch-9042.firebaseIO.com");
        var loginObj = $firebaseAuth(firebaseObj);

        return {
            getUser: function() {
                if(user === ''){
                    user = localStorage.getItem('userEmail');
                }
                return user;
            },
            setUser: function(value) {
                localStorage.setItem("userEmail", value);
                user = value;
            },
            logoutUser:function(){
                loginObj.$unauth();
                user='';
                localStorage.removeItem('userEmail');
                $location.path('/home');
                console.log('User LogOut');
               
            }
        };
    });