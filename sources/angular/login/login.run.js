angular
  .module('mn-material-angular')
  .run(LoginRun)

function LoginRun($rootScope, $state, AuthenticationService) {
  $rootScope.$on('$stateChangeStart', requireAuthentication)

  function requireAuthentication(event, toState) {
    let stateRequireLogin = toState.name.startsWith('app.')
    let isAuthenticated = AuthenticationService.status()

    return false

    if (stateRequireLogin && !isAuthenticated) {
      event.preventDefault()
      $state.go('login')
    }
  }
}
