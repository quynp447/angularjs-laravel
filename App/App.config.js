myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    template:"<user-component></user-component>"
  })
  // .when('/login',{
  //     template:"<login-component></login-component>"
  //     // controller:usercontroller
  // })
  .when('/edit/:id',{
    template:"<login-component></login-component>"
  })
  .when('/add',{
    template:"<add-component></add-component>"
  })
});