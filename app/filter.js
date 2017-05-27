/*ay we want to create a filter where we want to create a filter that will calculate the power of the given number with the provided parameter.
If no parameter is provided then the power value will be taken as 1.*/

(function () {

  angular.module("myAngularApplication").filter('power', function() {
      return function (input, powerValue) {
        //checks is powerValue valid (true, not false)
        if(!powerValue){
          powerValue = 1;
        }
        return Math.pow(input,powerValue);
      }
  });

}());
