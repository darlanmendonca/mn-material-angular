angular
  .module('mn-material-angular')
  .config(LoginConfig)

function LoginConfig($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      'main': {
        templateUrl: 'templates/login.template.html',
        controller: 'LoginController',
        controllerAs: 'login',
      },
    },
  })
}

