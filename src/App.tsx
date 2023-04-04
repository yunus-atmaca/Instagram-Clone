import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation-locker'

import { useSession } from '@src/hooks/app'

const App = () => {
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
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
