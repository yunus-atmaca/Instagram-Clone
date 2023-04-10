import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import Animated from 'react-native-reanimated'
import { useAppSelector } from '@src/types/store'

type Props = {}

const LongPressDetails: FC<Props> = () => {
  const { event, data } = useAppSelector(s => s.touchController)

  useEffect(()=>{
    console.debug(data)
  },[data])

  if (event === 'out' || data === null) return null
  return (
    <View style={styles.container}>
      <Animated.View style={styles.content}></Animated.View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'red',
    paddingHorizontal: '16@ms',
    paddingVertical: '12@ms',
  },
  content: {},
})

export default LongPressDetails
