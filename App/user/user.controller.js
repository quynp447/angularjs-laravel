angular
    .module('user')
    .controller('usercontroller', [ '$http','$location',function($http,$location){

        var quy= this;
        quy.getajax=function(){
            $http
            .get('http://localhost:81/public/api/text')
            .then(function(response){
                //  console.log(response); 
                quy.users=response.data;
                
            });
        }
        quy.getajax();  
        quy.modal = function(us){
            $location
            .path('/edit/'+ us.id);
            // quy.user.name=us.name;
            // quy.user.email=us.email;
            // quy.user.password=us.password;
        }
        quy.add=function(){
            $location
                .path('/add');
        }
    }]);
    // .then(function(us){
    //     quy.user.name=us.name;
    //     quy.user.email=us.email;
    //     quy.user.password=us.password;
    // });