"use strict";function AppConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="",$authProvider.authHeader="Authorization",$authProvider.tokenType="Bearer",$authProvider.authToken="",$authProvider.storageType="localStorage"}function AuthenticationService($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function HomeConfig($stateProvider){$stateProvider.state("app.home",{url:"/",views:{"content@app":{templateUrl:"templates/home.template.html",controller:"HomeController",controllerAs:"home"}}})}function HomeController(){this.users=[{name:"John Snow",email:"snow@iknownothing.com"},{name:"Khaleesi",email:"motherofdragons@targaryen.com"},{name:"Hodor",email:"hodor@hodor.thedoor"},{name:"Tyrion Lannister",email:"theimp@lannisters.com"},{name:"Cersei Baratheon",email:"thequeen@lannisters.com"},{name:"Brandon Stark",email:"thewarg@starks.com"},{name:"Robb Stark",email:"thewolf@starks.com"},{name:"Jaime Lannister",email:"thekingslayer@lannisters.com"},{name:"Sansa Stark",email:"sonsa@stark.com"},{name:"Nights King",email:"nightsking@thewinteriscoming.com"}]}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}})}function LoginController(AuthenticationService,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}AuthenticationService.login(this.credentials).then(redirectToHome)}var username=void 0,password=void 0;this.credentials={username:username,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,AuthenticationService){function requireAuthentication(event,toState){var stateRequireLogin=toState.name.startsWith("app."),isAuthenticated=AuthenticationService.status();stateRequireLogin&&!isAuthenticated&&(event.preventDefault(),$state.go("login"))}$rootScope.$on("$stateChangeStart",requireAuthentication)}angular.module("mn-material-angular",["ui.router","satellizer","mn-input","ngAnimate"]),AppConfig.$inject=["$locationProvider","$stateProvider"],angular.module("mn-material-angular").config(AppConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("mn-material-angular").config(AuthenticationConfig),AuthenticationService.$inject=["$auth"],angular.module("mn-material-angular").service("AuthenticationService",AuthenticationService),HomeConfig.$inject=["$stateProvider"],angular.module("mn-material-angular").config(HomeConfig),angular.module("mn-material-angular").controller("HomeController",HomeController),LoginConfig.$inject=["$stateProvider"],angular.module("mn-material-angular").config(LoginConfig),LoginController.$inject=["AuthenticationService","$state"],angular.module("mn-material-angular").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","AuthenticationService"],angular.module("mn-material-angular").run(LoginRun);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwcC9hcHAuY29uZmlnLmpzIiwiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwiYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsImhvbWUvaG9tZS5jb25maWcuanMiLCJob21lL2hvbWUuY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLmNvbmZpZy5qcyIsImxvZ2luL2xvZ2luLmNvbnRyb2xsZXIuanMiLCJsb2dpbi9sb2dpbi5ydW4uanMiXSwibmFtZXMiOlsiQXBwQ29uZmlnIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsImh0bWw1TW9kZSIsInN0YXRlIiwiYWJzdHJhY3QiLCJ2aWV3cyIsIm1haW4iLCJ0ZW1wbGF0ZVVybCIsIkF1dGhlbnRpY2F0aW9uQ29uZmlnIiwiJGF1dGhQcm92aWRlciIsImxvZ2luVXJsIiwiYXV0aEhlYWRlciIsInRva2VuVHlwZSIsImF1dGhUb2tlbiIsInN0b3JhZ2VUeXBlIiwiQXV0aGVudGljYXRpb25TZXJ2aWNlIiwiJGF1dGgiLCJ0aGlzIiwibG9naW4iLCJ1c2VyIiwibG9nb3V0Iiwic3RhdHVzIiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0UGF5bG9hZCIsIkhvbWVDb25maWciLCJ1cmwiLCJjb250ZW50QGFwcCIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJIb21lQ29udHJvbGxlciIsInVzZXJzIiwibmFtZSIsImVtYWlsIiwiTG9naW5Db25maWciLCJMb2dpbkNvbnRyb2xsZXIiLCIkc3RhdGUiLCJhdXRoZW50aWNhdGUiLCJyZWRpcmVjdFRvSG9tZSIsImdvIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkxvZ2luUnVuIiwiJHJvb3RTY29wZSIsInJlcXVpcmVBdXRoZW50aWNhdGlvbiIsImV2ZW50IiwidG9TdGF0ZSIsInN0YXRlUmVxdWlyZUxvZ2luIiwic3RhcnRzV2l0aCIsInByZXZlbnREZWZhdWx0IiwiJG9uIiwiYW5ndWxhciIsIm1vZHVsZSIsIiRpbmplY3QiLCJjb25maWciLCJzZXJ2aWNlIiwicnVuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQ0lBLFNBQVNBLFdBQVVDLGtCQUFtQkMsZ0JBQ3BDRCxrQkFBa0JFLFdBQVUsR0FFNUJELGVBQWVFLE1BQU0sT0FDbkJDLFlBQVUsRUFDVkMsT0FDRUMsTUFDRUMsWUFBYSxrQ0NQckIsUUFBU0Msc0JBQXFCQyxlQUM1QkEsY0FBY0MsU0FBVyxHQUN6QkQsY0FBY0UsV0FBYSxnQkFDM0JGLGNBQWNHLFVBQVksU0FDMUJILGNBQWNJLFVBQVksR0FDMUJKLGNBQWNLLFlBQWMsZUNMOUIsUUFBU0MsdUJBQXNCQyxPQUM3QkMsS0FBS0MsTUFBUSxTQUFBQyxNQUFBLE1BQUFILE9BQUFFLE1BQUFDLE9BQ2JGLEtBQUtHLE9BQVMsV0FBQSxNQUFBSixPQUFBSSxVQUNkSCxLQUFLSSxPQUFTLFdBQUEsTUFBQUwsT0FBQU0sbUJBQ2RMLEtBQUtFLEtBQU8sV0FBQSxNQUFBSCxPQUFBTyxjQ0pkLFFBQVNDLFlBQVd2QixnQkFDbEJBLGVBQWVFLE1BQU0sWUFDbkJzQixJQUFLLElBQ0xwQixPQUNFcUIsZUFDRW5CLFlBQWEsK0JBQ2JvQixXQUFZLGlCQUNaQyxhQUFjLFdDUHRCLFFBQVNDLGtCQUNQWixLQUFLYSxRQUVEQyxLQUFNLFlBQ05DLE1BQU8sMEJBR1BELEtBQU0sV0FDTkMsTUFBTyxrQ0FHUEQsS0FBTSxRQUNOQyxNQUFPLHdCQUdQRCxLQUFNLG1CQUNOQyxNQUFPLDBCQUdQRCxLQUFNLG1CQUNOQyxNQUFPLDRCQUdQRCxLQUFNLGdCQUNOQyxNQUFPLHVCQUdQRCxLQUFNLGFBQ05DLE1BQU8sdUJBR1BELEtBQU0sa0JBQ05DLE1BQU8saUNBR1BELEtBQU0sY0FDTkMsTUFBTyxvQkFHUEQsS0FBTSxjQUNOQyxNQUFPLHFDQ3hDYixRQUFTQyxhQUFZaEMsZ0JBQ25CQSxlQUFlRSxNQUFNLFNBQ25Cc0IsSUFBSyxTQUNMcEIsT0FDRUMsTUFDRUMsWUFBYSxnQ0FDYm9CLFdBQVksa0JBQ1pDLGFBQWMsWUNQdEIsUUFBU00saUJBQWdCbkIsc0JBQXVCb0IsUUFXOUMsUUFBU0MsZ0JBS1AsUUFBU0Msa0JBQ1BGLE9BQU9HLEdBQUcsWUFMWnZCLHNCQUNHRyxNQUFNRCxLQUFLc0IsYUFDWEMsS0FBS0gsZ0JBYlYsR0FBSUksVUFBQUEsT0FDQUMsU0FBQUEsTUFFSnpCLE1BQUtzQixhQUNIRSxTQUFBQSxTQUNBQyxTQUFBQSxVQUdGekIsS0FBS21CLGFBQWVBLGFDVHRCLFFBQVNPLFVBQVNDLFdBQVlULE9BQVFwQix1QkFHcEMsUUFBUzhCLHVCQUFzQkMsTUFBT0MsU0FDcEMsR0FBSUMsbUJBQW9CRCxRQUFRaEIsS0FBS2tCLFdBQVcsUUFDNUMzQixnQkFBa0JQLHNCQUFzQk0sUUFFeEMyQixxQkFBc0IxQixrQkFDeEJ3QixNQUFNSSxpQkFDTmYsT0FBT0csR0FBRyxVQVJkTSxXQUFXTyxJQUFJLG9CQUFxQk4sdUJSTHRDTyxRQUFRQyxPQUFPLHVCQUNiLFlBQ0EsYUFDQSxXQUNBLGNDSEZ0RCxVQUFVdUQsU0FBVyxvQkFBcUIsa0JBRDFDRixRQUNHQyxPQUFPLHVCQUNQRSxPQUFPeEQsV0NEVlMscUJBQXFCOEMsU0FBVyxpQkFEaENGLFFBQ0dDLE9BQU8sdUJBQ1BFLE9BQU8vQyxzQkNEVk8sc0JBQXNCdUMsU0FBVyxTQURqQ0YsUUFDR0MsT0FBTyx1QkFDUEcsUUFBUSx3QkFBeUJ6Qyx1QkNEcENTLFdBQVc4QixTQUFXLGtCQUR0QkYsUUFDR0MsT0FBTyx1QkFDUEUsT0FBTy9CLFlDRlY0QixRQUNHQyxPQUFPLHVCQUNQMUIsV0FBVyxpQkFBa0JFLGdCQ0RoQ0ksWUFBWXFCLFNBQVcsa0JBRHZCRixRQUNHQyxPQUFPLHVCQUNQRSxPQUFPdEIsYUNEVkMsZ0JBQWdCb0IsU0FBVyx3QkFBeUIsVUFEcERGLFFBQ0dDLE9BQU8sdUJBQ1AxQixXQUFXLGtCQUFtQk8saUJDRGpDUyxTQUFTVyxTQUFXLGFBQWMsU0FBVSx5QkFENUNGLFFBQ0dDLE9BQU8sdUJBQ1BJLElBQUlkIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJywgW1xuICAndWkucm91dGVyJyxcbiAgJ3NhdGVsbGl6ZXInLFxuICAnbW4taW5wdXQnLFxuICAnbmdBbmltYXRlJyxcbl0pXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAuY29uZmlnKEFwcENvbmZpZylcblxuZnVuY3Rpb24gQXBwQ29uZmlnKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcikge1xuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSlcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwJywge1xuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHZpZXdzOiB7XG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb25maWcoQXV0aGVudGljYXRpb25Db25maWcpXG5cbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uQ29uZmlnKCRhdXRoUHJvdmlkZXIpIHtcbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9ICcnXG4gICRhdXRoUHJvdmlkZXIuYXV0aEhlYWRlciA9ICdBdXRob3JpemF0aW9uJ1xuICAkYXV0aFByb3ZpZGVyLnRva2VuVHlwZSA9ICdCZWFyZXInXG4gICRhdXRoUHJvdmlkZXIuYXV0aFRva2VuID0gJydcbiAgJGF1dGhQcm92aWRlci5zdG9yYWdlVHlwZSA9ICdsb2NhbFN0b3JhZ2UnXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb25TZXJ2aWNlJywgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvblNlcnZpY2UoJGF1dGgpIHtcbiAgdGhpcy5sb2dpbiA9IHVzZXIgPT4gJGF1dGgubG9naW4odXNlcilcbiAgdGhpcy5sb2dvdXQgPSAoKSA9PiAkYXV0aC5sb2dvdXQoKVxuICB0aGlzLnN0YXR1cyA9ICgpID0+ICRhdXRoLmlzQXV0aGVudGljYXRlZCgpXG4gIHRoaXMudXNlciA9ICgpID0+ICRhdXRoLmdldFBheWxvYWQoKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJylcbiAgLmNvbmZpZyhIb21lQ29uZmlnKVxuXG5mdW5jdGlvbiBIb21lQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAuaG9tZScsIHtcbiAgICB1cmw6ICcvJyxcbiAgICB2aWV3czoge1xuICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lLnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdob21lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIEhvbWVDb250cm9sbGVyKVxuXG5mdW5jdGlvbiBIb21lQ29udHJvbGxlcigpIHtcbiAgdGhpcy51c2VycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnSm9obiBTbm93JyxcbiAgICAgIGVtYWlsOiAnc25vd0Bpa25vd25vdGhpbmcuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLaGFsZWVzaScsXG4gICAgICBlbWFpbDogJ21vdGhlcm9mZHJhZ29uc0B0YXJnYXJ5ZW4uY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdIb2RvcicsXG4gICAgICBlbWFpbDogJ2hvZG9yQGhvZG9yLnRoZWRvb3InLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1R5cmlvbiBMYW5uaXN0ZXInLFxuICAgICAgZW1haWw6ICd0aGVpbXBAbGFubmlzdGVycy5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NlcnNlaSBCYXJhdGhlb24nLFxuICAgICAgZW1haWw6ICd0aGVxdWVlbkBsYW5uaXN0ZXJzLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQnJhbmRvbiBTdGFyaycsXG4gICAgICBlbWFpbDogJ3RoZXdhcmdAc3RhcmtzLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUm9iYiBTdGFyaycsXG4gICAgICBlbWFpbDogJ3RoZXdvbGZAc3RhcmtzLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSmFpbWUgTGFubmlzdGVyJyxcbiAgICAgIGVtYWlsOiAndGhla2luZ3NsYXllckBsYW5uaXN0ZXJzLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU2Fuc2EgU3RhcmsnLFxuICAgICAgZW1haWw6ICdzb25zYUBzdGFyay5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ05pZ2h0cyBLaW5nJyxcbiAgICAgIGVtYWlsOiAnbmlnaHRza2luZ0B0aGV3aW50ZXJpc2NvbWluZy5jb20nLFxuICAgIH0sXG4gIF1cbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb25maWcoTG9naW5Db25maWcpXG5cbmZ1bmN0aW9uIExvZ2luQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWFpbic6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcihBdXRoZW50aWNhdGlvblNlcnZpY2UsICRzdGF0ZSkge1xuICBsZXQgdXNlcm5hbWVcbiAgbGV0IHBhc3N3b3JkXG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZCxcbiAgfVxuXG4gIHRoaXMuYXV0aGVudGljYXRlID0gYXV0aGVudGljYXRlXG5cbiAgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgLmxvZ2luKHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAudGhlbihyZWRpcmVjdFRvSG9tZSlcblxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Ib21lKCkge1xuICAgICAgJHN0YXRlLmdvKCdhcHAuaG9tZScpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAucnVuKExvZ2luUnVuKVxuXG5mdW5jdGlvbiBMb2dpblJ1bigkcm9vdFNjb3BlLCAkc3RhdGUsIEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCByZXF1aXJlQXV0aGVudGljYXRpb24pXG5cbiAgZnVuY3Rpb24gcmVxdWlyZUF1dGhlbnRpY2F0aW9uKGV2ZW50LCB0b1N0YXRlKSB7XG4gICAgbGV0IHN0YXRlUmVxdWlyZUxvZ2luID0gdG9TdGF0ZS5uYW1lLnN0YXJ0c1dpdGgoJ2FwcC4nKVxuICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBBdXRoZW50aWNhdGlvblNlcnZpY2Uuc3RhdHVzKClcblxuICAgIGlmIChzdGF0ZVJlcXVpcmVMb2dpbiAmJiAhaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAkc3RhdGUuZ28oJ2xvZ2luJylcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZXMvYW5ndWxhciJ9
