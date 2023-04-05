import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_ChevronLeft } from '@src/res'

type Props = {
  onPrefix?: () => void
  onPostfix?: () => void
}

const Header: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Ic_ChevronLeft />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    height: '56@ms',
    width: '100%',
    paddingHorizontal: '16@ms',
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
})

export default Header
