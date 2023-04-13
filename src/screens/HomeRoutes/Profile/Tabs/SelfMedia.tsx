import React, { FC } from 'react'
import { ListRenderItem, View } from 'react-native'
import { Tabs } from 'react-native-collapsible-tab-view'
import { ScaledSheet } from 'react-native-size-matters'

const DATA = [0, 1, 2, 3, 4]

const SelfMedia: FC = () => {
  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    )
  }, [])

  return (
    <Tabs.FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(_, i) => 'k-' + i}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
})

export default SelfMedia
