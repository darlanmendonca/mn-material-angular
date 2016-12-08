angular
  .module('mn-material-angular')
  .controller('HomeController', HomeController)

function HomeController(users) {
  this.users = users
}
