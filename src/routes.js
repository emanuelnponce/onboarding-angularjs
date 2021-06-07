function AppRoutes ($stateProvider, $locationProvider) {
  $stateProvider.state('state1', {
    url: '/',
    views: {
      'main': 'view1'
    }
  });
  $locationProvider.html5Mode(true);
}
AppRoutes.$inject = ['$stateProvider', '$locationProvider'];
export { AppRoutes };
