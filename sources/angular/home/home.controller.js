angular
  .module('mn-material-angular')
  .controller('HomeController', HomeController)

function HomeController() {
  this.users = [
    {
      name: 'John Snow',
      email: 'snow@iknownothing.com',
    },
    {
      name: 'Khaleesi',
      email: 'motherofdragons@targaryen.com',
    },
  ]
}
