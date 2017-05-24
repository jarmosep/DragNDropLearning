app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider // stateProvider changes UI view upon an action
        .state('landing', {
            url: '/',
            templateUrl: 'src/templates/landing.html',
            controller: 'LandingCtrl'

        })
        .state('quiz', {
            url: '/quiz',
            templateUrl: 'src/templates/quiz.html',
            controller: 'LearningCtrl'
        });

        $urlRouterProvider.otherwise('/');

}]);
