angular.module( 'ngBoilerplate.services', [
  'ui.router',
  'placeholders'
])
    .controller( 'ServiceCtrl', function ServiceCtrl( $scope,$firebase,CommonProp,$location ) {

        //Request FireBase title is SERVICES
        var firebaseObjService = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/");

        //Saved in variable
        var syncService = $firebase(firebaseObjService);

        $scope.ServiceName = syncService.$asArray();

        //Request FireBase title is SERVICES
        var firebaseObjSkills = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/");

        //Saved in variable
        var syncSkills = $firebase(firebaseObjSkills);

        $scope.SkillsName = syncSkills.$asArray();


        $scope.counter = 0;


        $scope.SlideNext = function(){
          if( $scope.counter== $scope.ServiceName.length){
              $scope.counter =0;
              console.log($scope.counter);
          } else{ $scope.counter++;
              console.log($scope.counter);
          }

        };
        $scope.SlidePrevius = function(){
            if($scope.counter===0){
                $scope.counter = $scope.ServiceName.length;
                console.log($scope.counter);
            } else{ $scope.counter--;
                console.log($scope.counter);
            }

        };

    })

.controller( '[A]ServiceCtrl', function AServiceCtrl( $scope,$firebase,CommonProp,$location ) {
            //User === Admin
      $scope.username = CommonProp.getUser();
        //if User !== Admin ->>
      if(!$scope.username){
        $location.path('/home');
      }
        //LogOut
      $scope.logout = function(){
        CommonProp.logoutUser();

      };




//----------------------------SERVICES----------------------------------------------------------------------
        //Request FireBase title is SERVICES
        var firebaseObjService = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/");

        //Saved in variable
        var ServiceNamesync = $firebase(firebaseObjService);

        $scope.ServiceName = ServiceNamesync.$asArray();

        //Add Service
        $scope.AddServices = function(){

            var ServicesName = $scope.ServiceName.name;






            ServiceNamesync.$push({name: ServicesName}).then(function(ref) {


            }, function(error) {

                console.log("Error:", error);
            });

        };

        //Message about Delete
        $scope.confirmDeleteService = function(id) {
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/" + id);
            var ServiceElement = $firebase(fb);
            $scope.ServiceToDelete = ServiceElement.$asObject();
            $('#deleteModalService').modal();
        };

        $scope.deleteService = function() {
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/" + $scope.ServiceToDelete.$id);
            var ServiceElement = $firebase(fb);
            ServiceElement.$remove().then(function(ref) {
                $('#deleteModalService').modal('hide');
            }, function(error) {
                console.log("Error:", error);
            });
        };
        $scope.updateService = function() {
            console.log($scope.ServiceToUpdate.id);
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/" + $scope.ServiceToUpdate.$id);
            var ServiceElement = $firebase(fb);
            ServiceElement.$update({
                name: $scope.ServiceToUpdate.name

            }).then(function(ref) {
                console.log(ref.key()); // bar
                $('#editModalService').modal('hide');
            }, function(error) {
                console.log("Error:", error);
            });

        };
        $scope.editService = function(id) {
            console.log(id);
            var firebaseObjService = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Services/" + id);


            var ServiceSync = $firebase(firebaseObjService);
            $scope.ServiceToUpdate = ServiceSync.$asObject();

            $('#editModalService').modal();
        };

//-------------------------------SKILLS-------------------------------------------------------

        var firebaseObjSkills = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/");


        var SkillsNameSync = $firebase(firebaseObjSkills);

        $scope.SkillsName = SkillsNameSync.$asArray();


        //Add Skills
        $scope.AddSkills = function(){

            var SkillsName = $scope.SkillsName.name;
            var SelectedService = $scope.SelectedService.name;


            SkillsNameSync.$push({name: SkillsName,SelectedService:SelectedService}).then(function(ref) {


            }, function(error) {

                console.log("Error:", error);
            });

        };

        //Message about Delete
        $scope.confirmDeleteSkills = function(id) {
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/" + id);
            var SkillsElement = $firebase(fb);
            $scope.SkillsToDelete = SkillsElement.$asObject();
            $('#deleteModalSkills').modal();
        };

        $scope.deleteSkills = function() {
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/" + $scope.SkillsToDelete.$id);
            var SkillsElement = $firebase(fb);
            SkillsElement.$remove().then(function(ref) {
                $('#deleteModalSkills').modal('hide');
            }, function(error) {
                console.log("Error:", error);
            });
        };
        $scope.updateSkills = function() {
            console.log($scope.SkillsToUpdate.id);
            var fb = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/" + $scope.SkillsToUpdate.$id);
            var SkillsElement = $firebase(fb);
            SkillsElement.$update({
                name: $scope.SkillsToUpdate.name

            }).then(function(ref) {
                console.log(ref.key()); // bar
                $('#editModalSkills').modal('hide');
            }, function(error) {
                console.log("Error:", error);
            });

        };
        $scope.editSkills = function(id) {
            console.log(id);
            var firebaseObjSkills = new Firebase("https://blinding-torch-9042.firebaseIO.com/PortfolioAng/SaS/Skills/" + id);


            var syncSkills = $firebase(firebaseObjSkills);
            $scope.SkillsToUpdate = syncSkills.$asObject();

            $('#editModalSkills').modal();
        };
})

;
