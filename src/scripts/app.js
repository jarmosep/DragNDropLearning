var app = angular.module('e-learning', ['ngAnimate', 'ngSanitize','dragularModule']);

app.filter("breakLines", function($filter) {
 return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 };
});
