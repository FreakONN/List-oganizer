(function () {

    var remoteService = function ($http) {
        var _fetchList = function () {
            return $http.get('https://jsonplaceholder.typicode.com/users');
        };

        return {
            fetchList: _fetchList
        };
    }

    angular.module('myAngularApplication').factory('remoteService', ["$http", remoteService]);

}());
