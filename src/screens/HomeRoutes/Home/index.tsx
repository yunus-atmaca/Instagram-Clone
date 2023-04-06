import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { HRSScreenPropsC } from '@src/types/navigation'
import { COLORS } from '@src/res'

import Header from './Header'

const Home: FC<HRSScreenPropsC<'Home'>> = ({}) => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
})

export default Home
