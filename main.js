// //run when Html file is loaded
// //window .onload in jquery
// $(document).ready(function() {
//   //input event on input tag ,which runs whenever we write in the input tag
//       //it also works on backspace , keypress wont work
//     $('#user-email').on('input',function(){   //'keyup' event
//         var email = $('#user-email').val();
//         //email=email.split('@')[0];  get string till @
//         var message= 'Welcome, '+email;
//         $('.welcome-message').text(message);
//         // console.log($('#user-email').val())
//     });});

//FoodieApp is the name of our App and we are defining a js variable for it
//we are initiallizing angular here by this function and it will return some value storing in this var
//1st argument of the function is name of app and 2nd will be having extra functionality values
var foodieApp = angular.module('FoodieApp',[]);
// console.log(foodieApp);

//.controller is used to create a controller
foodieApp.controller('loginController',function($scope){

})

foodieApp.controller('homeController',function($scope){
  //this is the controller for home page and named homeController and passed as the 1st argument
  //2nd arg is the function that will be performed by this controller

  //$scope is our model which stores data and handle it
  //WE can add functions and properties to this object and can use them in  our html within scope
  // $scope.number =42;       {{number}}      number is our model object
  $scope.restaurants = ['Farzi Cafe','McDonalds','Pizza Hut','Cafe Coffee Day'];
    
})
