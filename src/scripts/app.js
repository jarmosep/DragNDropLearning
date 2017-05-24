var app = angular.module('e-learning', ['ui.router', 'ngSanitize', 'ngAnimate', 'dragularModule']);

app.filter("breakLines", function($filter) {
 return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 };
});
