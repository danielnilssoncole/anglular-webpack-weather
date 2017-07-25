export default function SurveyController ($scope, $location) {
  $scope.weatherInfo = {};

  $scope.submit = (form) => {
    window.console.log(form, $scope.weatherInfo);
    form.$setPristine();
  }

  $scope.testFunc = (form) => {
    window.console.log(form);
    window.console.log(form.CurrentTemp.$modelValue);
  }

  $scope.isTempValid = (field, value) => {
    if (value > 200) {
      field.$setValidity("aboveMax", false);
    } else if (value < -100) {
      field.$setValidity("belowMin", false);
    }
  }

}
