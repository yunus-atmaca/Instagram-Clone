import React, { FC } from 'react'
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { ISearchData } from '@src/types/types'
import { STYLES } from '@src/res'

type Props = {
  m: ISearchData
  vPosition: 'prefix' | 'postfix'
}

const SINGLE_W = STYLES.S_WIDTH / 3

const TypeHas3: FC<Props> = ({ m, vPosition }) => {
  const getSlotS = (has: boolean, numberOfSlot?: number) => {
    let def: StyleProp<ViewStyle> = {
      paddingTop: 2,
      width: (numberOfSlot ? 2 : 1) * SINGLE_W,
      height: (numberOfSlot ? 2 : 1) * SINGLE_W,
      backgroundColor: 'black',
    }
    let pH: StyleProp<ViewStyle> = { paddingHorizontal: 2 }
    let pS: StyleProp<ViewStyle> = { paddingStart: 2 }

    return [def, has ? pH : pS]
  }

  return (
    <View style={styles.container}>
      {vPosition === 'prefix' && (
        <View style={getSlotS(false, 4)}>
          <View style={styles.img} />
        </View>
      )}
      <View>
        <View style={getSlotS(vPosition === 'prefix')}>
          <View style={styles.img} />
        </View>
        <View style={getSlotS(vPosition === 'prefix')}>
          <View style={styles.img} />
        </View>
      </View>
      {vPosition === 'postfix' && (
        <View style={getSlotS(true, 4)}>
          <View style={styles.img} />
        </View>
      )}
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
  img: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
})

export default TypeHas3
