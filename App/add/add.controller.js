angular
    .module('add')
    .controller('AddController',['$http','$routeParams','$location',function($http,$routeParams,$location){
        var add= this;
        add.$onInit = function (response) {
            add.addForm = {};
            add.addForm.name='';
            add.addForm.email='';
            add.addForm.password='';
        }
    add.addclick=function(){
        $http({
            method:'post',
            url:'http://localhost:81/public/api'+'/add',
            data: add.addForm,  
            // headers:{'Content-Type':'application/x-www-form-urlencoded'},
        })
        .then(function(response){
            alert('them thanh cong');
            location.reload();

           return $location.path('/');
            console.log(response);
        })
    }
    }]);