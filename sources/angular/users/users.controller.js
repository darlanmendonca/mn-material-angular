angular
  .module('mn-material-angular')
  .controller('UsersController', UsersController)

function UsersController(list, data) {
  this.list = list
  this.data = data
}
