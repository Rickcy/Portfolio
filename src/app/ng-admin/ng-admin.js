
    angular.module( 'ngBoilerplate.admin', [
        'ui.router',
        'plusOne'
    ])
        .service('CommonProp',['$location','$firebaseAuth',function($location,$firebaseAuth) {
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
                $location.path('/welcome');
            }
        };
    }])

        .controller( 'AdminCtrl',AdminCtrl);
    AdminCtrl.$inject = ['$scope','$location','CommonProp','$firebaseAuth'];
    function AdminCtrl($scope,$location,CommonProp,$firebaseAuth) {


        var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com");

        var loginObj = $firebaseAuth(firebaseObj);

        loginObj.$onAuth(function (authData) {
            if (authData) {
                CommonProp.setUser(authData.password.email);
                $location.path('/admin');
            }
        });

        $scope.user = {};
        var login = {};

        $scope.test = function () {
            login.loading = true;
        };

        $scope.login = login;
        $scope.SignIn = function (e) {
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
                    $location.path('/admin');
                }, function (error) {
                    //Failure callback
                    login.loading = false;
                    console.log('Authentication failure');
                });
        };
    }




