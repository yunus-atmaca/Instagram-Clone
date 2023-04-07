import React, { FC, useEffect } from 'react'
import { Image, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { HRSScreenPropsC } from '@src/types/navigation'
import { COLORS } from '@src/res'
import {Posts, Stories } from '@src/components'

import Header from './Header'

const Home: FC<HRSScreenPropsC<'Home'>> = ({}) => {
  useEffect(() => {}, [])

  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <Posts />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})

export default Home
