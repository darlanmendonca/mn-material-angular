angular
  .module('mn-material-angular')
  .config(ApiConfig)

function ApiConfig(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://private-a82ea-samples9.apiary-mock.com')
}
