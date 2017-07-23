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
var foodieApp = angular.module('FoodieApp',['ngRoute']);  //ngRoute is additional functionality and this are called as module
//so here we are initiallizing and adding list of modules
// console.log(foodieApp);

//Adding routes to our websites by .config (configuration) and passing a function inside it
foodieApp.config(function($routeProvider){
  $routeProvider            //and object defined in ngroute
  .when('/',{
    templateUrl:'Pages/Login.html',       //show this template when url is "www.....com/"
    controller:"loginController"          //and this controller is to be used with this view
  })
  .when('/home',{
    templateUrl:'Pages/Home.html',
    controller:'homeController'
  })
  .when('/restaurant/:id',{                     //:id routeparamater having diff val for dif view
    templateUrl:'Pages/restaurant.html',
    controller:'restController'
  })

})

//.controller is used to create a controller
foodieApp.controller('loginController',function($scope,$location){
    $scope.gotoHome = function(){
      $location.url('home');
    }
})

foodieApp.controller('homeController',function($scope){
  //this is the controller for home page and named homeController and passed as the 1st argument
  //2nd arg is the function that will be performed by this controller

  //$scope is our model which stores data and handle it
  //WE can add functions and properties to this object and can use them in  our html within scope
  // $scope.number =42;       {{number}}      number is our model object
  $scope.restaurants = [
    {
        id:'1',
        name:'Tribute',
        address:'89-B, Monica Complex, Ambamata Temple Road, Fateh Sagar, Udaipur',
        location:'Fateh Sagar',
        category:'Fine Dining',
        vote:'4.3',
        cuisines:'North Indian, Rajasthani, Continental',
        cost:'1500',
        hours:'11:30 AM to 4 PM, 7PM to 11PM',
        image:'https://b.zmtcdn.com/data/pictures/2/18041442/f0046919f60d923d8ecb895950e9e338.jpg?fit=around%7C80%3A80&crop=80%3A80%3B%2A%2C%2A'
    },
    {
        id:'2',
        name:'Farzi Cafe',
        address:'38/42, Level 2, Block C, Inner Circle, Connought Place',
        location:'Connought Place',
        category:'Casual Dining, Bar',
        vote:'4.2',
        cuisines:'Modern Indian',
        cost:'2200',
        hours:'12 Noon to 12 AM (Mon-Sun)',
        image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
      id:'3',
      name:'Tapri Central',
      address:' B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Scheme, Jaipur',
      location:'C Scheme',
      category:'Cafe, Quick Bites',
      vote:'4.7',
      cuisines:'Cafe, Fast Food, Street Food',
      cost:'750',
      hours:'7:30 AM to 9:45 PM',
      image:'https://b.zmtcdn.com/data/pictures/2/101212/5f52b703513ac5e2a942a8025cc5af28.jpg?fit=around%7C80%3A80&crop=80%3A80%3B%2A%2C%2A'
    },
    {
      id:'4',
      name:'Mic & Munch',
      address:'Near D.P Jewellers, Opposite Hanuman Temple, Bhopalpura, Udaipur',
      location:'Bhopalpura',
      category:'Casual Dining,Cafe',
      vote:'4.1',
      cuisines:'Mexican, Cafe, Italian, North Indian, Chinese',
      cost:'650',
      hours:'11 AM to 11 PM',
      image:'https://b.zmtcdn.com/data/pictures/0/18400430/25f960835d2a4fde13976ca7ac13e7ad.jpg?fit=around%7C80%3A80&crop=80%3A80%3B%2A%2C%2A'
    },
    {
      id:'5',
      name:'',
      address:'',
      location:'',
      category:'',
      vote:'',
      cuisines:'',
      cost:'',
      hours:'',
      image:''
    },
    {
      id:'6',
      name:'Cafe LazyMojo',
      address:'H 1, Lal Bahadur Nagar, S.L Marg, Malviya Nagar, Jaipur',
      location:'Malviya Nagar',
      category:'Cafe, Casual Dining',
      vote:'4.3',
      cuisines:'Cafe, Mexican, Italian, Continental',
      cost:'800',
      hours:'11 AM to 11PM',
      image:'https://b.zmtcdn.com/data/pictures/1/102531/14c1fc6f345575d8061c454be04fb46a.jpg?fit=around%7C80%3A80&crop=80%3A80%3B%2A%2C%2A'
    },
    {
      id:'7',
      name:'',
      address:'',
      location:'',
      category:'',
      vote:'',
      cuisines:'',
      cost:'',
      hours:'',
      image:''
    },
    {
      id:'8',
      name:'',
      address:'',
      location:'',
      category:'',
      vote:'',
      cuisines:'',
      cost:'',
      hours:'',
      image:''
    }
  ];

})

foodieApp.controller('restController',function($scope,$routeParams){
    $scope.restaurantId=$routeParams.id;
    var restaurants = [
      {
          name:'',
          address:'',
          location:'',
          category:'',
          vote:'',
          cuisines:'',
          cost:'',
          hours:'',
          image:''
      },
      {
          name:'Farzi Cafe',
          address:'38/42, Level 2, Block C, Inner Circle, Connought Place',
          location:'Connought Place',
          category:'Casual Dining, Bar',
          vote:'4.2',
          cuisines:'Modern Indian',
          cost:'2200',
          hours:'12 Noon to 12 AM (Mon-Sun)',
          image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
      },
      {
        name:'',
        address:'',
        location:'',
        category:'',
        vote:'',
        cuisines:'',
        cost:'',
        hours:'',
        image:''
      },
      {
        name:'',
        address:'',
        location:'',
        category:'',
        vote:'',
        cuisines:'',
        cost:'',
        hours:'',
        image:''
      },
      {
        name:'',
        address:'',
        location:'',
        category:'',
        vote:'',
        cuisines:'',
        cost:'',
        hours:'',
        image:''
      },
      {
        name:'',
        address:'',
        location:'',
        category:'',
        vote:'',
        cuisines:'',
        cost:'',
        hours:'',
        image:''
      },
      {
        name:'',
        address:'',
        location:'',
        category:'',
        vote:'',
        cuisines:'',
        cost:'',
        hours:'',
        image:''
      },
      {
        name:'',
        address:'',
        location:'',
        category:'',
        vote:'',
        cuisines:'',
        cost:'',
        hours:'',
        image:''
      }
    ];
    $scope.restaurant = restaurants[$routeParams.id-1];
})
