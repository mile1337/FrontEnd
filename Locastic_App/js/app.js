angular.module('myApp', [])
    .controller('AppController', ['$scope', function($scope) {
    var self = this;
    self.user={id:null,name:'',surname:'',address:'',zip:'',city:'',state:'',phone:'',email:''};
    self.id = 1;
       
    self.users = [];
               
    self.submit = function() {
        if(self.user.id === null){
            self.user.id = self.id++;    
            self.users.push(self.user);
        }else{
            for(var i = 0; i < self.users.length; i++){
                if(self.users[i].id === self.user.id) {
                    self.users[i] = self.user;
                    break;
                }
            }
        }
        self.reset();
    };
               
    self.edit = function(id){
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.user = angular.copy(self.users[i]);
                break;
            }
        }
    }
               
    self.remove = function(id){
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id === id) {
                self.users.splice(i,1);
                    if(self.user.id === id){
                        self.reset();
                    }
                break;
            }
        }
    }
               
    self.reset = function(){
        self.user={id:null,name:'',surname:'',address:'',zip:'',city:'',state:'',phone:'',email:''};
            $scope.myForm.$setPristine();
    }
 
}]);
