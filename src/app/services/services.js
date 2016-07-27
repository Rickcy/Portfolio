angular.module( 'ngBoilerplate.services', [
  'ui.router',
  'placeholders'
])
    .controller( 'ServiceCtrl', function ServiceCtrl( $scope,$firebase,CommonProp,$location ) {

        var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/");


        var sync = $firebase(firebaseObj);

        $scope.element = sync.$asArray();



    })

.controller( '[A]ServiceCtrl', function AServiceCtrl( $scope,$firebase,CommonProp,$location ) {

      $scope.username = CommonProp.getUser();
      if(!$scope.username){
        $location.path('/home');
      }
      $scope.logout = function(){
        CommonProp.logoutUser();

      };
        var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/");


        var sync = $firebase(firebaseObj);

        $scope.element = sync.$asArray();
        console.log(sync);
        $scope.AddServices = function(){
            var name = $scope.element.name;


            var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/");

            var fb = $firebase(firebaseObj);




            fb.$push({name: name}).then(function(ref) {


            }, function(error) {

                console.log("Error:", error);
            });

        };
        $scope.confirmDelete = function(id) {
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/" + id);
            var element = $firebase(fb);
            $scope.postToDelete = element.$asObject();
            $('#deleteModal').modal();
        };

        $scope.deleteService = function() {
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/" + $scope.postToDelete.$id);
            var element = $firebase(fb);
            element.$remove().then(function(ref) {
                $('#deleteModal').modal('hide');
            }, function(error) {
                console.log("Error:", error);
            });
        };
        $scope.update = function() {
            console.log($scope.postToUpdate.id);
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/" + $scope.postToUpdate.$id);
            var element = $firebase(fb);
            element.$update({
                name: $scope.postToUpdate.name

            }).then(function(ref) {
                console.log(ref.key()); // bar
                $('#editModal').modal('hide');
            }, function(error) {
                console.log("Error:", error);
            });

        };
        $scope.editService = function(id) {
            console.log(id);
            var firebaseObj = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/" + id);


            var syn = $firebase(firebaseObj);
            $scope.postToUpdate = syn.$asObject();

            $('#editModal').modal();
        };


})

;
