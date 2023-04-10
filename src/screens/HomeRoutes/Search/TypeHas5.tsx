import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { ISearchData } from '@src/types/types'
import { STYLES } from '@src/res'
import Slot from './Slot'

type Props = {
  m: ISearchData
  vPosition: 'prefix' | 'postfix'
}

const SINGLE_W = STYLES.S_WIDTH / 3

const TypeHas5: FC<Props> = ({ m, vPosition }) => {
  return (
    <View style={styles.container}>
      {vPosition === 'prefix' && (
        <Slot has={false} slotNumber={2} media={m.data[0].data} />
      )}
      <View>
        <Slot has={false} media={m.data[1].data} />
        <Slot has={false} media={m.data[2].data} />
      </View>
      <View>
        <Slot has={vPosition === 'prefix'} media={m.data[3].data} />
        <Slot has={vPosition === 'prefix'} media={m.data[4].data} />
      </View>
      {vPosition === 'postfix' && (
        <Slot has={true} slotNumber={2} media={m.data[0].data} />
      )}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    height: SINGLE_W * 2,
    width: STYLES.S_WIDTH,
    //backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default TypeHas5
