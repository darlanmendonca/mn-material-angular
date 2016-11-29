angular
  .module('mn-material-angular')
  .config(AppConfig);

function AppConfig($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider.state('app', {
    abstract: true,
    views: {
      main: {
        templateUrl: 'templates/app.template.html',
      },
    },
  });
}
