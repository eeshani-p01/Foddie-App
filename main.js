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
      $('#app .navbar').removeClass('hidden');
    }
    $('.glyphicon.glyphicon-menu-down').hover(function(){
      $('.glyphicon-menu-down').removeClass('infinite')
      // console.log('toogle');
    });

    $('.glyphicon.glyphicon-menu-down').on('click',function(){
      $('.logo1').addClass('rotateOutUpLeft');
      setTimeout(function(){
        $('.logo1').addClass('hidden');
      },500);
      setTimeout(function(){
        $('.login-form').addClass('slideInUp');
        $('.login-form').removeClass('hidden');
      },100)
    });
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
      name:'Nibs Cafe',
      address:'B-16 Durgadas Colony, Next to MGF Mall, Bhawani Singh Road, C Scheme, Jaipur',
      location:'C Scheme',
      category:'Cafe',
      vote:'4.6',
      cuisines:'Cafe, Italian, Mexican',
      cost:'750',
      hours:'11 AM to 10:45 PM',
      image:'https://b.zmtcdn.com/data/reviews_photos/2e7/c433c665572b89b91c668586c2d8e2e7_1485370142.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
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
      name:'Jaiwana Haveli Rooftop Restaurant',
      address:'14, Lalghat, Chandpole, Udaipur',
      location:'Chandpole',
      category:'Casual Dining',
      vote:'4.2',
      cuisines:'Rajasthani, North India, Fast Food',
      cost:'900',
      hours:'7:30 AM to 11:30 PM',
      image:'https://b.zmtcdn.com/data/pictures/9/18041439/4b8619e5f480c3486d79d9daf79bb743.jpg?fit=around%7C80%3A80&crop=80%3A80%3B%2A%2C%2A'
    },
    {
      id:'8',
      name:'Replay',
      address:'SB 57, 5th Floor, Ridhi Tower, Opposite SMS Stadium, Tonk Road, Jaipur',
      location:'Tonk Road',
      category:'Casual Dining',
      vote:'4.4',
      cuisines:'North Indian, Continental, Chinese, Italian, Mexican',
      cost:'1500',
      hours:'11 AM to 1 AM',
      image:'https://b.zmtcdn.com/data/pictures/6/100306/fcf59d4e5118fe0cdeca9427212692a5.jpg?fit=around%7C80%3A80&crop=80%3A80%3B%2A%2C%2A'
    }
  ];

})

foodieApp.controller('restController',function($scope,$routeParams,$http){
    $scope.restaurantId=$routeParams.id;
    $scope.ingredients = [];
    var restaurants = [
      {
          name:'Tribute',
          address:'89-B, Monica Complex, Ambamata Temple Road, Fateh Sagar, Udaipur',
          location:'Fateh Sagar',
          category:'Fine Dining',
          vote:'4.3',
          cuisines:'North Indian, Rajasthani, Continental',
          cost:'1500',
          hours:'11:30 AM to 4 PM, 7PM to 11PM',
          image:'https://b.zmtcdn.com/data/pictures/2/18041442/f0046919f60d923d8ecb895950e9e338.jpg?output-format=webp'
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
          bestDish: {
            name: 'Corn Pizza',
            image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
          },
          image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
      },
      {
        name:'Tapri Central',
        address:' B4 E, 3rd Floor, Surana Jewellers, Opposite Central Park, C Scheme, Jaipur',
        location:'C Scheme',
        category:'Cafe, Quick Bites',
        vote:'4.7',
        cuisines:'Cafe, Fast Food, Street Food',
        cost:'750',
        hours:'7:30 AM to 9:45 PM',
        image:'https://b.zmtcdn.com/data/pictures/2/101212/18a8a6d5a56434d02ef5915da77b19b8.jpg?output-format=webp'
      },
      {
        name:'Mic & Munch',
        address:'Near D.P Jewellers, Opposite Hanuman Temple, Bhopalpura, Udaipur',
        location:'Bhopalpura',
        category:'Casual Dining,Cafe',
        vote:'4.1',
        cuisines:'Mexican, Cafe, Italian, North Indian, Chinese',
        cost:'650',
        hours:'11 AM to 11 PM',
        image:'https://b.zmtcdn.com/data/pictures/0/18400430/25f960835d2a4fde13976ca7ac13e7ad.jpg?output-format=webp'
      },
      {
        name:'Nibs Cafe',
        address:'B-16 Durgadas Colony, Next to MGF Mall, Bhawani Singh Road, C Scheme, Jaipur',
        location:'C Scheme',
        category:'Cafe',
        vote:'4.6',
        cuisines:'Cafe, Italian, Mexican',
        cost:'750',
        hours:'11 AM to 10:45 PM',
        image:'http://diningwithnoelle.com/wp-content/uploads/2015/12/photo-1-3-1000x520.jpg'
      },
      {
        name:'Cafe LazyMojo',
        address:'H 1, Lal Bahadur Nagar, S.L Marg, Malviya Nagar, Jaipur',
        location:'Malviya Nagar',
        category:'Cafe, Casual Dining',
        vote:'4.3',
        cuisines:'Cafe, Mexican, Italian, Continental',
        cost:'800',
        hours:'11 AM to 11PM',
        image:'https://b.zmtcdn.com/data/pictures/chains/1/102531/b2b174c4d4852509c1895c8391f65b00.jpg?output-format=webp'
      },
      {
        name:'Jaiwana Haveli Rooftop Restaurant',
        address:'14, Lalghat, Chandpole, Udaipur',
        location:'Chandpole',
        category:'Casual Dining',
        vote:'4.2',
        cuisines:'Rajasthani, North India, Fast Food',
        cost:'900',
        hours:'7:30 AM to 11:30 PM',
        image:'https://b.zmtcdn.com/data/pictures/9/18041439/4b8619e5f480c3486d79d9daf79bb743.jpg?output-format=webp'
      },
      {
        name:'Replay',
        address:'SB 57, 5th Floor, Ridhi Tower, Opposite SMS Stadium, Tonk Road, Jaipur',
        location:'Tonk Road',
        category:'Casual Dining',
        vote:'4.4',
        cuisines:'North Indian, Continental, Chinese, Italian, Mexican',
        cost:'1500',
        hours:'11 AM to 1 AM',
        image:'https://b.zmtcdn.com/data/pictures/6/100306/e1f5eb8c9bac9a7ee00e3be677a5fc8b.jpg?output-format=webp'
      }
    ];
    $scope.restaurant = restaurants[$routeParams.id-1];
      $scope.getIngredients = function(url){
          var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
              $http({
                	'method': 'POST',
                	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
                	'headers': {
                		'Authorization': 'Key d32931f783ca4d3c8bc8503bce71e841',
                		'Content-Type': 'application/json'
                	},
                	'data': data
                }).then(
                  function (response) {
                		  var ingredients = response.data.outputs[0].data.concepts;
                			for (var i =0;i<ingredients.length;i++){
                        $scope.ingredients.push(ingredients[i].name);
                      }
                    },
                  function (xhr) {
                          console.log(xhr);
                        }
                  );

            $('.bestImage').addClass('hidden');

        }
        $scope.show = function(){
          $('.bestImage').removeClass('hidden');
        }
})

$('.recommend #myButton').on('click', function () {
    var $btn = $(this).button('loading')
    console.log('loading');
    // business logic...
    $btn.button('reset')
  })
