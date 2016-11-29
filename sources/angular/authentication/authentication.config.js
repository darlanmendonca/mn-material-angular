angular
  .module('mn-material-angular')
  .config(AuthenticationConfig);

function AuthenticationConfig($authProvider) {
  $authProvider.loginUrl = '';
  $authProvider.authHeader = 'Authorization';
  $authProvider.tokenType = 'Bearer';
  $authProvider.authToken = '';
  $authProvider.storageType = 'localStorage';
}
