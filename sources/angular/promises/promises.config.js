angular
  .module('mn-material-angular')
  .config(PromisesConfig)

function PromisesConfig($qProvider) {
  $qProvider.errorOnUnhandledRejections(false)
}
