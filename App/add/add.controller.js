angular
    .module('add')
    .controller('AddController',['$http','$location',function($http,$location){
        var add=this;
        //  add.addForm = {};
        add.$onInit = function () {
            add.addForm = {};
            add.addForm.name="";
            add.addForm.email="";
            add.addForm.password="";
        }
    add.addclick=function(response){
        add.addForm.name="";
        add.addForm.email="";
        add.addForm.password="";
        console.log(response);
        $http({
            method:'post',
            url:'http://localhost:81/public/api/add',
            data: add.AddForm,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
        })
        .then(function(response){
            console.log(response);
        })
    }
    }]);