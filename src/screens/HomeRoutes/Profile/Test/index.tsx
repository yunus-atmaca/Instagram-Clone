import React, { useState } from 'react'
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import CollapsibleTabView from './CollapsibleTabView'
import HeaderScrollableTabView from './HeaderScrollableTabView'
import PullRefreshTabView from './PullRefreshTabView'

const App = () => {
  const [mode, setMode] = useState('collapsible')

  const renderDemo = () => {
    switch (mode) {
      case 'collapsible':
        return <CollapsibleTabView />
      case 'scrollable':
        return <HeaderScrollableTabView />
      case 'refresh':
        return <PullRefreshTabView />
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PullRefreshTabView />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  button: {
    flex: 1,
    height: 48,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingHorizontal: 16,
  },
})

export default App
