app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider // stateProvider changes UI view upon an action
        .state('/', {
            url: '', // when state is 'landing', url is redirected to root
            template: './templates/landing.html'
        })
        .state('quiz', {
            url: '/quiz',
            template: './templates/quiz.html',
            controller: 'learningCtrl'
        });

      $urlRouterProvider.otherwise('/');

}]);

app.run('$state', function($state) {
    $state.go('/');
});
