import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation-locker'
import { Provider } from 'react-redux'
import { PortalProvider } from '@gorhom/portal'

import { useSession } from '@src/hooks/app'
import { store } from '@src/store'
import RootNav from '@src/navigation/RootNav'

const Root = () => {
  const appSession = useSession()

  useEffect(() => {
    Orientation.lockToPortrait()

    if (appSession === 'LOADING') {
    } else if (appSession === 'LOADED') {
      SplashScreen.hide()
    } else if (appSession === 'FAILED') {
    }
  }, [appSession])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <RootNav />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <PortalProvider>
        <Root />
      </PortalProvider>
    </Provider>
  )
}

export default App
