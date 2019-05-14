angular
    .module('user')
    .controller('usercontroller', [ '$http','$location','$routeParams',function($http,$location,$routeParams){

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
        }

        quy.add=function(){
            $location
                .path('/add');
        }

        quy.delete=function(id){
            var deleteform= confirm('ban co chac chan xoa khong');
            console.log(id);
            if(deleteform){
                $http   
                    .get('http://localhost:81/public/api/delete/'+id)
                    .then(function(response){
                        alert('xoa thanh cong');
                        location.reload();
                        return $location.path('/');
                        console.log(response);
                    })
            }
        }
    }]);