angular
  .module('mn-material-angular')
  .directive('sidenavToggle', SidenavToggleDirective)

function SidenavToggleDirective() {
  return {
    restrict: 'A',
    link,
  }

  function link(scope, button) {
    button.on('click', toggle)

    function toggle() {
      document.querySelector('.sidenav').classList.toggle('visible')
    }
  }
}
