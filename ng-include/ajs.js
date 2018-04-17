var app = angular.module("main", []);

app.controller("cntrl", ["$rootScope", "$scope", "$timeout", function($rootScope, $scope, $timeout) {
    $scope.employees = [
        { name: "Ben", gender: "Male", salary: 55000 },
        { name: "Sara", gender: "Female", salary: 68000 },
        { name: "Mark", gender: "Male", salary: 57000 },
        { name: "Pam", gender: "Female", salary: 53000 },
        { name: "Todd", gender: "Male", salary: 60000 }
    ];
    $scope.e = "empList.html";

    $rootScope.A = "A before msg";
    $scope.B = "B before msg";
    setTimeout(function() {

        console.log("after timeout");
        $rootScope.A = "A after msg";
        $scope.B = "B after msg";
        $scope.$watch();
        console.log($rootScope.A);
        console.log($scope.B)
    }, 3000)

}]);