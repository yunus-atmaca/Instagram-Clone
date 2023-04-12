import React, { FC, useState } from 'react'
import { LayoutChangeEvent, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'

import { COLORS } from '@src/res'
import { HRSScreenPropsC } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'

import Header from './Header'
import PersistentHeader from './PersistentHeader'
import { USER_INFO_HEIGHT, BUTTONS_HEIGHT } from './Constant'

const Profile: FC<HRSScreenPropsC<'ProfileTab', 'Profile'>> = () => {
  const user = useAppSelector(s => s.authController.user!)
  const [pageHeight, setPH] = useState(0)

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y
    },
  })

  const _onLayout = (e: LayoutChangeEvent) => {
    setPH(e.nativeEvent.layout.height)
  }

  return (
    <View onLayout={_onLayout} style={styles.container}>
      <Animated.ScrollView
        scrollEnabled={pageHeight > 0}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={{
          minHeight: pageHeight + USER_INFO_HEIGHT + BUTTONS_HEIGHT,
        }}
        onScroll={scrollHandler}></Animated.ScrollView>

      <Header scrollValue={scrollY} avatar={user.picture.large} />
      <PersistentHeader username={user.name.first} />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})

export default Profile
