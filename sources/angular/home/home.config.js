angular
  .module('mn-material-angular')
  .config(HomeConfig)

function HomeConfig($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/',
      redirectTo: 'app.users',
    })
}
