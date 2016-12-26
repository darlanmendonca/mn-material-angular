"use strict";function ApiConfig(RestangularProvider){RestangularProvider.setBaseUrl("https://private-a82ea-samples9.apiary-mock.com")}function AppConfig($locationProvider,$stateProvider){$locationProvider.html5Mode(!0),$stateProvider.state("app",{"abstract":!0,views:{main:{templateUrl:"templates/app.template.html"}}})}function AuthenticationConfig($authProvider){$authProvider.loginUrl="",$authProvider.authHeader="Authorization",$authProvider.tokenType="Bearer",$authProvider.authToken="",$authProvider.storageType="localStorage"}function AuthenticationService($auth){this.login=function(user){return $auth.login(user)},this.logout=function(){return $auth.logout()},this.status=function(){return $auth.isAuthenticated()},this.user=function(){return $auth.getPayload()}}function loadingConfig(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1,cfpLoadingBarProvider.includeBar=!0}function LoginConfig($stateProvider){$stateProvider.state("login",{url:"/login",views:{main:{templateUrl:"templates/login.template.html",controller:"LoginController",controllerAs:"login"}}})}function LoginController(AuthenticationService,$state){function authenticate(){function redirectToHome(){$state.go("app.home")}AuthenticationService.login(this.credentials).then(redirectToHome)}var username=void 0,password=void 0;this.credentials={username:username,password:password},this.authenticate=authenticate}function LoginRun($rootScope,$state,AuthenticationService){function requireAuthentication(event,toState){toState.name.startsWith("app."),AuthenticationService.status();return!1}$rootScope.$on("$stateChangeStart",requireAuthentication)}function PromisesConfig($qProvider){$qProvider.errorOnUnhandledRejections(!1)}function SidenavToggleDirective(){function link(scope,button){function toggle(){document.querySelector(".sidenav").classList.toggle("visible")}button.on("click",toggle)}return{restrict:"A",link:link}}function UsersConfig($stateProvider){$stateProvider.state("app.users",{url:"/users",views:{"content@app":{templateUrl:"templates/users-list.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(Users){return Users.list()},data:function(){return null}}}}}).state("app.users.edit",{url:"/:id",views:{"content@app":{templateUrl:"templates/users-form.template.html",controller:"UsersController",controllerAs:"users",resolve:{list:function(){return null},data:function(Users){return Users.get("johnsnow")}}}}})}function UsersController(list,data){this.list=list,this.data=data}function UsersService(Restangular){function list(){return resource.getList()}function get(id){return resource.one(id).get()}var resource=Restangular.service("users");this.list=list,this.get=get}angular.module("mn-material-angular",["ui.router","satellizer","mn-form","mn-input","ngAnimate","restangular","angular-loading-bar"]),ApiConfig.$inject=["RestangularProvider"],angular.module("mn-material-angular").config(ApiConfig),AppConfig.$inject=["$locationProvider","$stateProvider"],angular.module("mn-material-angular").config(AppConfig),AuthenticationConfig.$inject=["$authProvider"],angular.module("mn-material-angular").config(AuthenticationConfig),AuthenticationService.$inject=["$auth"],angular.module("mn-material-angular").service("AuthenticationService",AuthenticationService),loadingConfig.$inject=["cfpLoadingBarProvider"],angular.module("mn-material-angular").config(loadingConfig),LoginConfig.$inject=["$stateProvider"],angular.module("mn-material-angular").config(LoginConfig),LoginController.$inject=["AuthenticationService","$state"],angular.module("mn-material-angular").controller("LoginController",LoginController),LoginRun.$inject=["$rootScope","$state","AuthenticationService"],angular.module("mn-material-angular").run(LoginRun),PromisesConfig.$inject=["$qProvider"],angular.module("mn-material-angular").config(PromisesConfig),angular.module("mn-material-angular").directive("sidenavToggle",SidenavToggleDirective),UsersConfig.$inject=["$stateProvider"],angular.module("mn-material-angular").config(UsersConfig),UsersController.$inject=["list","data"],angular.module("mn-material-angular").controller("UsersController",UsersController),UsersService.$inject=["Restangular"],angular.module("mn-material-angular").service("Users",UsersService);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwaS9hcGkuY29uZmlnLmpzIiwiYXBwL2FwcC5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb25maWcuanMiLCJhdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwibG9hZGluZy1iYXIvbG9hZGluZy1iYXIuY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29uZmlnLmpzIiwibG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImxvZ2luL2xvZ2luLnJ1bi5qcyIsInByb21pc2VzL3Byb21pc2VzLmNvbmZpZy5qcyIsInNpZGVuYXYvc2lkZW5hdi5kaXJlY3RpdmUuanMiLCJ1c2Vycy91c2Vycy5jb25maWcuanMiLCJ1c2Vycy91c2Vycy5jb250cm9sbGVyLmpzIiwidXNlcnMvdXNlcnMuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJBcGlDb25maWciLCJSZXN0YW5ndWxhclByb3ZpZGVyIiwic2V0QmFzZVVybCIsIkFwcENvbmZpZyIsIiRsb2NhdGlvblByb3ZpZGVyIiwiJHN0YXRlUHJvdmlkZXIiLCJodG1sNU1vZGUiLCJzdGF0ZSIsImFic3RyYWN0Iiwidmlld3MiLCJtYWluIiwidGVtcGxhdGVVcmwiLCJBdXRoZW50aWNhdGlvbkNvbmZpZyIsIiRhdXRoUHJvdmlkZXIiLCJsb2dpblVybCIsImF1dGhIZWFkZXIiLCJ0b2tlblR5cGUiLCJhdXRoVG9rZW4iLCJzdG9yYWdlVHlwZSIsIkF1dGhlbnRpY2F0aW9uU2VydmljZSIsIiRhdXRoIiwidGhpcyIsImxvZ2luIiwidXNlciIsImxvZ291dCIsInN0YXR1cyIsImlzQXV0aGVudGljYXRlZCIsImdldFBheWxvYWQiLCJsb2FkaW5nQ29uZmlnIiwiY2ZwTG9hZGluZ0JhclByb3ZpZGVyIiwiaW5jbHVkZVNwaW5uZXIiLCJpbmNsdWRlQmFyIiwiTG9naW5Db25maWciLCJ1cmwiLCJjb250cm9sbGVyIiwiY29udHJvbGxlckFzIiwiTG9naW5Db250cm9sbGVyIiwiJHN0YXRlIiwiYXV0aGVudGljYXRlIiwicmVkaXJlY3RUb0hvbWUiLCJnbyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJMb2dpblJ1biIsIiRyb290U2NvcGUiLCJyZXF1aXJlQXV0aGVudGljYXRpb24iLCJldmVudCIsInRvU3RhdGUiLCJuYW1lIiwic3RhcnRzV2l0aCIsIiRvbiIsIlByb21pc2VzQ29uZmlnIiwiJHFQcm92aWRlciIsImVycm9yT25VbmhhbmRsZWRSZWplY3Rpb25zIiwiU2lkZW5hdlRvZ2dsZURpcmVjdGl2ZSIsImxpbmsiLCJzY29wZSIsImJ1dHRvbiIsInRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsIm9uIiwicmVzdHJpY3QiLCJVc2Vyc0NvbmZpZyIsImNvbnRlbnRAYXBwIiwicmVzb2x2ZSIsImxpc3QiLCJVc2VycyIsImRhdGEiLCJnZXQiLCJVc2Vyc0NvbnRyb2xsZXIiLCJVc2Vyc1NlcnZpY2UiLCJSZXN0YW5ndWxhciIsInJlc291cmNlIiwiZ2V0TGlzdCIsImlkIiwib25lIiwic2VydmljZSIsImFuZ3VsYXIiLCJtb2R1bGUiLCIkaW5qZWN0IiwiY29uZmlnIiwicnVuIiwiZGlyZWN0aXZlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQ0lBLFNBQVNBLFdBQVVDLHFCQUNqQkEsb0JBQW9CQyxXQUFXLGtEQ0RqQyxRQUFTQyxXQUFVQyxrQkFBbUJDLGdCQUNwQ0Qsa0JBQWtCRSxXQUFVLEdBRTVCRCxlQUFlRSxNQUFNLE9BQ25CQyxZQUFVLEVBQ1ZDLE9BQ0VDLE1BQ0VDLFlBQWEsa0NDUHJCLFFBQVNDLHNCQUFxQkMsZUFDNUJBLGNBQWNDLFNBQVcsR0FDekJELGNBQWNFLFdBQWEsZ0JBQzNCRixjQUFjRyxVQUFZLFNBQzFCSCxjQUFjSSxVQUFZLEdBQzFCSixjQUFjSyxZQUFjLGVDTDlCLFFBQVNDLHVCQUFzQkMsT0FDN0JDLEtBQUtDLE1BQVEsU0FBQUMsTUFBQSxNQUFBSCxP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RDVDRixRQUNHQyxPQUFPLHVCQUNQRyxJQUFJeEMsVUNEUFEsZUFBZThCLFNBQVcsY0FEMUJGLFFBQ0dDLE9BQU8sdUJBQ1BFLE9BQU8vQixnQkNGVjRCLFFBQ0dDLE9BQU8sdUJBQ1BJLFVBQVUsZ0JBQWlCOUIsd0JDRDlCVSxZQUFZaUIsU0FBVyxrQkFEdkJGLFFBQ0dDLE9BQU8sdUJBQ1BFLE9BQU9sQixhQ0RWTyxnQkFBZ0JVLFNBQVcsT0FBUSxRQURuQ0YsUUFDR0MsT0FBTyx1QkFDUGhELFdBQVcsa0JBQW1CdUMsaUJDRGpDQyxhQUFhUyxTQUFXLGVBRHhCRixRQUNHQyxPQUFPLHVCQUNQRixRQUFRLFFBQVNOIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJywgW1xuICAndWkucm91dGVyJyxcbiAgJ3NhdGVsbGl6ZXInLFxuICAnbW4tZm9ybScsXG4gICdtbi1pbnB1dCcsXG4gICduZ0FuaW1hdGUnLFxuICAncmVzdGFuZ3VsYXInLFxuICAnYW5ndWxhci1sb2FkaW5nLWJhcicsXG5dKVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJylcbiAgLmNvbmZpZyhBcGlDb25maWcpXG5cbmZ1bmN0aW9uIEFwaUNvbmZpZyhSZXN0YW5ndWxhclByb3ZpZGVyKSB7XG4gIFJlc3Rhbmd1bGFyUHJvdmlkZXIuc2V0QmFzZVVybCgnaHR0cHM6Ly9wcml2YXRlLWE4MmVhLXNhbXBsZXM5LmFwaWFyeS1tb2NrLmNvbScpXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAuY29uZmlnKEFwcENvbmZpZylcblxuZnVuY3Rpb24gQXBwQ29uZmlnKCRsb2NhdGlvblByb3ZpZGVyLCAkc3RhdGVQcm92aWRlcikge1xuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSlcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnYXBwJywge1xuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHZpZXdzOiB7XG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb25maWcoQXV0aGVudGljYXRpb25Db25maWcpXG5cbmZ1bmN0aW9uIEF1dGhlbnRpY2F0aW9uQ29uZmlnKCRhdXRoUHJvdmlkZXIpIHtcbiAgJGF1dGhQcm92aWRlci5sb2dpblVybCA9ICcnXG4gICRhdXRoUHJvdmlkZXIuYXV0aEhlYWRlciA9ICdBdXRob3JpemF0aW9uJ1xuICAkYXV0aFByb3ZpZGVyLnRva2VuVHlwZSA9ICdCZWFyZXInXG4gICRhdXRoUHJvdmlkZXIuYXV0aFRva2VuID0gJydcbiAgJGF1dGhQcm92aWRlci5zdG9yYWdlVHlwZSA9ICdsb2NhbFN0b3JhZ2UnXG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb25TZXJ2aWNlJywgQXV0aGVudGljYXRpb25TZXJ2aWNlKVxuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvblNlcnZpY2UoJGF1dGgpIHtcbiAgdGhpcy5sb2dpbiA9IHVzZXIgPT4gJGF1dGgubG9naW4odXNlcilcbiAgdGhpcy5sb2dvdXQgPSAoKSA9PiAkYXV0aC5sb2dvdXQoKVxuICB0aGlzLnN0YXR1cyA9ICgpID0+ICRhdXRoLmlzQXV0aGVudGljYXRlZCgpXG4gIHRoaXMudXNlciA9ICgpID0+ICRhdXRoLmdldFBheWxvYWQoKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJylcbiAgLmNvbmZpZyhsb2FkaW5nQ29uZmlnKVxuXG5mdW5jdGlvbiBsb2FkaW5nQ29uZmlnKGNmcExvYWRpbmdCYXJQcm92aWRlcikge1xuICBjZnBMb2FkaW5nQmFyUHJvdmlkZXIuaW5jbHVkZVNwaW5uZXIgPSBmYWxzZVxuICBjZnBMb2FkaW5nQmFyUHJvdmlkZXIuaW5jbHVkZUJhciA9IHRydWVcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb25maWcoTG9naW5Db25maWcpXG5cbmZ1bmN0aW9uIExvZ2luQ29uZmlnKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWFpbic6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbG9naW4udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICdsb2dpbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG5cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5jb250cm9sbGVyKCdMb2dpbkNvbnRyb2xsZXInLCBMb2dpbkNvbnRyb2xsZXIpXG5cbmZ1bmN0aW9uIExvZ2luQ29udHJvbGxlcihBdXRoZW50aWNhdGlvblNlcnZpY2UsICRzdGF0ZSkge1xuICBsZXQgdXNlcm5hbWVcbiAgbGV0IHBhc3N3b3JkXG5cbiAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZCxcbiAgfVxuXG4gIHRoaXMuYXV0aGVudGljYXRlID0gYXV0aGVudGljYXRlXG5cbiAgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxuICAgICAgLmxvZ2luKHRoaXMuY3JlZGVudGlhbHMpXG4gICAgICAudGhlbihyZWRpcmVjdFRvSG9tZSlcblxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0VG9Ib21lKCkge1xuICAgICAgJHN0YXRlLmdvKCdhcHAuaG9tZScpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAucnVuKExvZ2luUnVuKVxuXG5mdW5jdGlvbiBMb2dpblJ1bigkcm9vdFNjb3BlLCAkc3RhdGUsIEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCByZXF1aXJlQXV0aGVudGljYXRpb24pXG5cbiAgZnVuY3Rpb24gcmVxdWlyZUF1dGhlbnRpY2F0aW9uKGV2ZW50LCB0b1N0YXRlKSB7XG4gICAgbGV0IHN0YXRlUmVxdWlyZUxvZ2luID0gdG9TdGF0ZS5uYW1lLnN0YXJ0c1dpdGgoJ2FwcC4nKVxuICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBBdXRoZW50aWNhdGlvblNlcnZpY2Uuc3RhdHVzKClcblxuICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKHN0YXRlUmVxdWlyZUxvZ2luICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICRzdGF0ZS5nbygnbG9naW4nKVxuICAgIH1cbiAgfVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJylcbiAgLmNvbmZpZyhQcm9taXNlc0NvbmZpZylcblxuZnVuY3Rpb24gUHJvbWlzZXNDb25maWcoJHFQcm92aWRlcikge1xuICAkcVByb3ZpZGVyLmVycm9yT25VbmhhbmRsZWRSZWplY3Rpb25zKGZhbHNlKVxufVxuIiwiYW5ndWxhclxuICAubW9kdWxlKCdtbi1tYXRlcmlhbC1hbmd1bGFyJylcbiAgLmRpcmVjdGl2ZSgnc2lkZW5hdlRvZ2dsZScsIFNpZGVuYXZUb2dnbGVEaXJlY3RpdmUpXG5cbmZ1bmN0aW9uIFNpZGVuYXZUb2dnbGVEaXJlY3RpdmUoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rLFxuICB9XG5cbiAgZnVuY3Rpb24gbGluayhzY29wZSwgYnV0dG9uKSB7XG4gICAgYnV0dG9uLm9uKCdjbGljaycsIHRvZ2dsZSlcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpXG4gICAgfVxuICB9XG59XG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAuY29uZmlnKFVzZXJzQ29uZmlnKVxuXG5mdW5jdGlvbiBVc2Vyc0NvbmZpZygkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwLnVzZXJzJywge1xuICAgICAgdXJsOiAnL3VzZXJzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdjb250ZW50QGFwcCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy91c2Vycy1saXN0LnRlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2Vyc0NvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3VzZXJzJyxcbiAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICBsaXN0OiBVc2VycyA9PiBVc2Vycy5saXN0KCksXG4gICAgICAgICAgICBkYXRhOiAoKSA9PiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAudXNlcnMuZWRpdCcsIHtcbiAgICAgIHVybDogJy86aWQnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2NvbnRlbnRAYXBwJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3VzZXJzLWZvcm0udGVtcGxhdGUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VzZXJzQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAndXNlcnMnLFxuICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGxpc3Q6ICgpID0+IG51bGwsXG4gICAgICAgICAgICBkYXRhOiBVc2VycyA9PiBVc2Vycy5nZXQoJ2pvaG5zbm93JylcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxufVxuXG4iLCJhbmd1bGFyXG4gIC5tb2R1bGUoJ21uLW1hdGVyaWFsLWFuZ3VsYXInKVxuICAuY29udHJvbGxlcignVXNlcnNDb250cm9sbGVyJywgVXNlcnNDb250cm9sbGVyKVxuXG5mdW5jdGlvbiBVc2Vyc0NvbnRyb2xsZXIobGlzdCwgZGF0YSkge1xuICB0aGlzLmxpc3QgPSBsaXN0XG4gIHRoaXMuZGF0YSA9IGRhdGFcbn1cbiIsImFuZ3VsYXJcbiAgLm1vZHVsZSgnbW4tbWF0ZXJpYWwtYW5ndWxhcicpXG4gIC5zZXJ2aWNlKCdVc2VycycsIFVzZXJzU2VydmljZSlcblxuZnVuY3Rpb24gVXNlcnNTZXJ2aWNlKFJlc3Rhbmd1bGFyKSB7XG4gIGNvbnN0IHJlc291cmNlID0gUmVzdGFuZ3VsYXIuc2VydmljZSgndXNlcnMnKVxuXG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy5nZXQgPSBnZXRcblxuICBmdW5jdGlvbiBsaXN0KCkge1xuICAgIHJldHVybiByZXNvdXJjZS5nZXRMaXN0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldChpZCkge1xuICAgIHJldHVybiByZXNvdXJjZS5vbmUoaWQpLmdldCgpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZXMvYW5ndWxhciJ9
