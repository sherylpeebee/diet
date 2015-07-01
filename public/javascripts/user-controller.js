angular.module("food-diary", [])
.controller("user-controller", function($scope, $http, $rootscope){
    $scope.statistics = {bmi: 25, old: 180, gained: 10, current: 190};
    $scope.saveUser = function(user){
      console.log($scope.userStats);
      $http.post("/users/" + user.name , user);
      console.log("add user attempt");
    console.log(user);
    $scope.user = {};
  };

  $scope.foods = [];
    $scope.addFood = function(food){
      food.date = new Date();
      $scope.foods.push(food);
      console.log($scope.foods);
      $http.post("/users/sam/food" , food);
      console.log("add food attempt");
    $scope.food = {};
  };
    $scope.calculateBMI = function(user){
      $scope.userStats = {};

    };


    $scope.deleteFood = function(index){
      $scope.foods.splice(index, 1);
  };
});
