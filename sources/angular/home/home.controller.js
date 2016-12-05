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
    {
      name: 'Hodor',
      email: 'hodor@hodor.thedoor',
    },
    {
      name: 'Tyrion Lannister',
      email: 'theimp@lannisters.com',
    },
    {
      name: 'Cersei Baratheon',
      email: 'thequeen@lannisters.com',
    },
    {
      name: 'Brandon Stark',
      email: 'thewarg@starks.com',
    },
    {
      name: 'Robb Stark',
      email: 'thewolf@starks.com',
    },
    {
      name: 'Jaime Lannister',
      email: 'thekingslayer@lannisters.com',
    },
    {
      name: 'Sansa Stark',
      email: 'sonsa@stark.com',
    },
    {
      name: 'Nights King',
      email: 'nightsking@thewinteriscoming.com',
    },
  ]
}
