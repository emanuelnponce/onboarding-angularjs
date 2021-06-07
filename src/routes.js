import { component1State } from "./components/component1/state";
import { component2State } from "./components/component2/state";
import { subcomponent1State } from "./components/component2/subcomponent1/state";

function AppRoutes ($stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      redirectTo: 'state1'
    })
    .state('state1', component1State)
    .state('state2', component2State)
    .state('state2.substate1', subcomponent1State);
  $locationProvider.html5Mode(true);
}
AppRoutes.$inject = ['$stateProvider', '$locationProvider'];
export { AppRoutes };
