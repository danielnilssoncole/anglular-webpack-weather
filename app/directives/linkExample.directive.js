import angular from 'angular'

function linkExample() {
  return {
    link: function($scope, element, attrs) {
      let count = 1;
      const singular = 'Time';
      const plural = 'Times';
      element.bind('click', function() {
        let word = count == 1 ? singular : plural;
        element.html(`You Have Clicked Me ${count} ${word}!`);
        count++;
      });
      element.bind('mouseenter', function() {
        element.css('background-color', 'yellow')
      });
      element.bind('mouseleave', function() {
        element.css('background-color', 'white')
      });
    }
  }
}

export default angular.module('directives.link-example', [])
  .directive('linkExample', linkExample)
  .name;
