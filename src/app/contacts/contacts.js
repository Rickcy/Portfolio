angular.module( 'ngBoilerplate.contacts', [
    'ui.router',
    'placeholders'

])
    .controller( 'ContactsCtrl', function ContactsCtrl( $scope,$window,$firebase ) {
        $scope.WritePost = function(){

            var Fname = $scope.post.name;
            var Email = $scope.post.email;
            var Message = $scope.post.message;

            var firebaseMessageObj = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/Messages/");

            var Messages = $firebase(firebaseMessageObj);


            Messages.$push({name: Fname,email:Email,message:Message}).then(function(ref) {
                $window.location.reload();

            }, function(error) {

                console.log("Error:", error);
            });

        };
    })

    .controller( '[A]ContactsCtrl', function AContactsCtrl( $scope,CommonProp,$location,$firebase) {
        $scope.username = CommonProp.getUser();
        if(!$scope.username){
            $location.path('/home');
        }
        $scope.logout = function(){
            CommonProp.logoutUser();

        };

        var firebaseObjMessage = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/Messages/");

        //Saved in variable
        var syncMessage = $firebase(firebaseObjMessage);

        $scope.Message = syncMessage.$asArray();





    });
