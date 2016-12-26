angular
  .module('mn-material-angular')
  .controller('UsersController', UsersController)

function UsersController(list) {
  this.list = list
}
