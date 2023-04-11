import React from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import PagerView from 'react-native-pager-view'
import { STYLES } from '@src/res'

import { videos } from '@src/data/generateData'
import Reel from './Reel'

const Reels = () => {
  return (
    <View style={styles.container}>
      <PagerView
        orientation={'vertical'}
        style={styles.pagerView}
        initialPage={0}>
        {videos.map((v, i) => {
          return <Reel v={v} i={i} />
        })}
      </PagerView>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    width: STYLES.W_WIDTH,
    height: STYLES.W_HEIGHT,
    backgroundColor: 'red',
  },
})

export default Reels
