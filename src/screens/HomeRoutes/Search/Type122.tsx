import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { ISearchData } from '@src/types/types'
import { STYLES } from '@src/res'

type Props = {
  m: ISearchData
}

const SINGLE_W = STYLES.S_WIDTH / 3

const Type122: FC<Props> = ({ m }) => {
  return (
    <View style={styles.container}>
      <View style={styles.slot1}>
        <View style={styles.imgContainer}>
          <View style={styles.img} />
        </View>
        <View style={[styles.imgContainer, { paddingBottom: 2 }]}>
          <View style={styles.img} />
        </View>
      </View>
      <View style={styles.slot1}>
        <View style={styles.imgContainer}>
          <View style={styles.img} />
        </View>
        <View style={[styles.imgContainer, { paddingBottom: 2 }]}>
          <View style={styles.img} />
        </View>
      </View>
      <View style={styles.slot2}>
        <View style={styles.img} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    height: SINGLE_W * 2,
    width: STYLES.S_WIDTH,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  slot1: {},
  slot2: {
    padding: 2,
    width: SINGLE_W,
    height: SINGLE_W * 2,
    backgroundColor: 'black',
  },
  imgContainer: {
    paddingStart: 2,
    paddingTop: 2,
    width: SINGLE_W,
    height: SINGLE_W,
    backgroundColor: 'black',
  },
  img: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
})

export default Type122
