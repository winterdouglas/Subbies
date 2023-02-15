import { useEffect, useRef, useState } from "react"
import { NavigationState } from "@react-navigation/native"
import { Config, PersistNavigationConfig } from "@config"
import { useIsMounted } from "@hooks"
import { IStorage } from "@utils/storage"
import { getActiveRouteName } from "../navigationUtilities"

/**
 * This helper function will determine whether we should enable navigation persistence
 * based on a config setting and the __DEV__ environment (dev or prod).
 */
function navigationRestoredDefaultState(persistNavigation: PersistNavigationConfig) {
  if (persistNavigation === "always") return false
  if (persistNavigation === "dev" && __DEV__) return false
  if (persistNavigation === "prod" && !__DEV__) return false

  // all other cases, disable restoration by returning true
  return true
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(storage: IStorage, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState()
  const isMounted = useIsMounted()

  const initNavState = navigationRestoredDefaultState(Config.persistNavigation)
  const [isRestored, setIsRestored] = useState(initNavState)

  const routeNameRef = useRef<string | undefined>()

  const onNavigationStateChange = (state: NavigationState | undefined) => {
    // const previousRouteName = routeNameRef.current
    const currentRouteName = getActiveRouteName(state)

    // if (previousRouteName !== currentRouteName) {
    //   // track screens.
    //   if (__DEV__) {
    //     console.tron.log(currentRouteName)
    //   }
    // }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName

    // Persist state to storage
    storage.save(persistenceKey, state)
  }

  const restoreState = async () => {
    try {
      const state = await storage.load(persistenceKey)
      if (state) setInitialNavigationState(state)
    } finally {
      if (isMounted()) setIsRestored(true)
    }
  }

  useEffect(() => {
    if (!isRestored) restoreState()
  }, [isRestored])

  return { onNavigationStateChange, restoreState, isRestored, initialNavigationState }
}
