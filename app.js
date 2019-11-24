var app = angular.module('myApp', []);
app.controller('MyController', ['$scope', function ($scope) {

    $scope.form = {};
    $scope.addReview = function () {
        $scope.reviews.push($scope.form);
        $scope.form = {};
    }


    $scope.reviews = [
        {
            comment: 'Could this BE more awesome?',
            by: 'Pankit Patel'
            
        },
        {
            comment: 'How are you doing?',
            by: 'Uma Patel'
        },
    ]
    // $scope.name = 'Pankit Patel';
    // $scope.age = 25;
    // $scope.weight = 150;
    // $scope.firstname = 'Pankit';
    // $scope.lastname = 'Patel';
    // $scope.fullname = function () {
    //     return $scope.firstname + " " + $scope.lastname;
    // };
    // $scope.isSpy = true;
    // $scope.codename = 'James';

    // $scope.count = 0;
    // $scope.show = true;
    // $scope.toggleShow = function () {
    //     $scope.show = !$scope.show;
    // }

    // $scope.employees = [
    //     {
    //         fname: 'Pankit',
    //         lname: 'Patel',
    //         salary: 50000
    //     },
    //     {
    //         fname: 'Uma',
    //         lname: 'Patel',
    //         salary: 20000

    //     },
    //     {
    //         fname: 'Chunyan',
    //         lname: 'Deng',
    //         salary: 30000
    //     }
    // ]
}])
