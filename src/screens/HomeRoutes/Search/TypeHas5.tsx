import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { ISearchData } from '@src/types/types'
import { STYLES } from '@src/res'

type Props = {
  m: ISearchData
  vPosition: 'prefix' | 'postfix'
}

const SINGLE_W = STYLES.S_WIDTH / 3

const TypeHas5: FC<Props> = ({ m, vPosition }) => {
  const getSlot2S = () => {
    if (vPosition === 'postfix')
      return {
        paddingHorizontal: 2,
        paddingTop: 2,
        width: SINGLE_W,
        height: SINGLE_W * 2,
        backgroundColor: 'black',
      }

    return {
      paddingStart: 2,
      paddingTop: 2,
      width: SINGLE_W,
      height: SINGLE_W * 2,
      backgroundColor: 'black',
    }
  }

  const getSlot1S = (has: boolean) => {
    if (has) {
      return {
        paddingHorizontal: 2,
        paddingTop: 2,
        width: SINGLE_W,
        height: SINGLE_W,
        backgroundColor: 'black',
      }
    }
    return {
      paddingStart: 2,
      paddingTop: 2,
      width: SINGLE_W,
      height: SINGLE_W,
      backgroundColor: 'black',
    }
  }

  return (
    <View style={styles.container}>
      {vPosition === 'prefix' && (
        <View style={getSlot2S()}>
          <View style={styles.img} />
        </View>
      )}
      <View>
        <View style={getSlot1S(false)}>
          <View style={styles.img} />
        </View>
        <View style={getSlot1S(false)}>
          <View style={styles.img} />
        </View>
      </View>
      <View>
        <View style={getSlot1S(vPosition === 'prefix')}>
          <View style={styles.img} />
        </View>
        <View style={getSlot1S(vPosition === 'prefix')}>
          <View style={styles.img} />
        </View>
      </View>
      {vPosition === 'postfix' && (
        <View style={getSlot2S()}>
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

export default TypeHas5
