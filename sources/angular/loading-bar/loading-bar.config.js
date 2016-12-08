angular
  .module('mn-material-angular')
  .config(loadingConfig)

function loadingConfig(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false
  cfpLoadingBarProvider.includeBar = true
}
