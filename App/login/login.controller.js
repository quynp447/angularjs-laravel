angular
    .module('login')
    .controller('LoginController',['$http', '$routeParams',function($http, $routeParams){
        var self=this;
        self.$onInit = function () {
          
            self.user = {};
            // self.url="http://localhost:81/public/api/";
            $http
                .get('http://localhost:81/public/api/edit/'+$routeParams.id)
                .then(function(response){
                    // console.log(response.data.name);
                    // console.log(self);
                    self.user.name=response.data.name;
                    self.user.email=response.data.email;
                    self.user.password=response.data.password;
                });
        self.updateonclick=function(){
            console.log(self.user);
            $http({
                method:'post',
                url:'http://localhost:81/public/api/edit/'+ $routeParams.id,
                data: self.user,
            })
            .then(function(response){ 
                alert('sua thanh cong');  
                console.log(response);
            })
                
        }
          };
    }]);