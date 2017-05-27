// (function () {
//
//     var booksController = function ($scope) {
//         $scope.message = "Hello from booksController";
//
//         this.greeting = "This is a greeting message using controller as syntax";
//
//         //empty array that will be populated with two way binding when fetchBooks is called
//         $scope.books = [];
//         //simple functions that populates $scope.book array above when called
//         $scope.fetchBooks = function () {
//             $scope.books = [
//                 { ID: 1, BookName: "Test Books 1", AuthorName: "Test Author 1", ISBN: "TEST1" },
//                 { ID: 2, BookName: "Test Books 2", AuthorName: "Test Author 2", ISBN: "TEST2" },
//                 { ID: 3, BookName: "Test Books 3", AuthorName: "Test Author 3", ISBN: "TEST3" },
//                 { ID: 4, BookName: "Test Books 4", AuthorName: "Test Author 4", ISBN: "TEST4" },
//                 { ID: 5, BookName: "Test Books 5", AuthorName: "Test Author 5", ISBN: "TEST5" }
//             ];
//         }
//     }
//
//     angular.module('myAngularApplication').controller('booksController', ["$scope", booksController]);
//
// }());
(function () {

    var mainController = function ($scope, $filter, localService, remoteService) {

        this.greeting = "Welcome to intro to https://jsonplaceholder.typicode.com";
        $scope.message = "JSON remote list";

        $scope.list = [];

        $scope.fetchList = function () {
              $scope.list = localService.books;
        }

        $scope.fetchListFromServer = function () {

            remoteService.fetchList()
            //try to retrieve data from the server
            .success(function (data, status, headers, config) {
                $scope.list = data;
            })
            .error(function (data, status, headers, config) {
                $scope.list = [];
                $scope.error = "Failed to retrieved items from server";
            });
        };
    }

    angular.module('myAngularApplication').controller('mainController', ["$scope", "$filter", "localService", "remoteService",  mainController]);

}());
