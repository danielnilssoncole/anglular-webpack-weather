export default function SurveyController ($scope, $location) {
  $scope.weatherInfo = {};

  $scope.submit = (form) => {
    window.console.log(form, $scope.weatherInfo);
    form.$setPristine();
  }

  $scope.isTempValid = (form) => {
    window.console.log(form);
    window.console.log(form.CurrentTemp.$modelValue);
    let value = form.CurrentTemp.$modelValue;
    let maxTemp = 200;
    let minTemp = -100;
    if (value > maxTemp) {
      form.CurrentTemp.$setValidity("aboveMax", false);
    } else if (value < minTemp) {
      form.CurrentTemp.$setValidity("belowMin", false);
    } else if (value > minTemp && value < maxTemp) {
      form.CurrentTemp.$setValidity("belowMin", true);
      form.CurrentTemp.$setValidity("aboveMax", true);
    }
  }

  $scope.isPercentValid = (form, field) => {
    window.console.log(form);
    window.console.log(form.field.$modelValue);
    let value = form.CurrentTemp.$modelValue;
    let max = 100;
    let min = 0;
    if (value > max) {
      form.field.$setValidity("aboveMax", false);
    } else if (value < min) {
      form.field.$setValidity("belowMin", false);
    } else if (value > min && value < max) {
      form.field.$setValidity("belowMin", true);
      form.field.$setValidity("aboveMax", true);
    }
  }
}
