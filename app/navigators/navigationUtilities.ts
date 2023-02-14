import {
  PartialState,
  NavigationState,
  createNavigationContainerRef,
} from "@react-navigation/native"

// /* eslint-disable */
// export const RootNavigation = {
//   navigate(_name: string, _params?: any) {},
//   goBack() {},
//   resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
//   getRootState(): NavigationState {
//     return {} as any
//   },
//   dispatch(_action: NavigationAction) {},
// }
// /* eslint-enable */

export const navigationRef = createNavigationContainerRef()

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>): string {
  const route = state.routes[state.index]

  // Found the active route -- return the name
  if (!route.state) return route.name

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state)
}
