angular
  .module('mn-material-angular')
  .config(HomeConfig)

function HomeConfig($stateProvider) {
  $stateProvider.state('app.users', {
    url: '/',
    views: {
      'content@app': {
        templateUrl: 'templates/users-list.template.html',
        controller: 'UsersController',
        controllerAs: 'users',
        resolve: {
          list: Users => Users.list(),
        },
      },
    },
  })
}
