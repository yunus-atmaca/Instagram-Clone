import React, { FC } from 'react'
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  SharedValue,
} from 'react-native-reanimated'

import { ScaledSheet } from 'react-native-size-matters'

import {
  PERSISTENT_HEADER_HEIGHT,
  USER_INFO_HEIGHT,
  BUTTONS_HEIGHT,
} from './Constant'
import UserInfo from './UserInfo'
import Buttons from './Buttons'

const cHHeight = USER_INFO_HEIGHT + BUTTONS_HEIGHT

type Props = {
  scrollValue: SharedValue<number>
  avatar: string
}

const Header: FC<Props> = ({ scrollValue, avatar }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollValue.value,
            [0, cHHeight],
            [0, -cHHeight],
            {
              extrapolateRight: Extrapolation.CLAMP,
              extrapolateLeft: Extrapolation.CLAMP,
            },
          ),
        },
      ],
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <UserInfo avatar={avatar} />
      <Buttons />
    </Animated.View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: PERSISTENT_HEADER_HEIGHT,
    width: '100%',
    height: cHHeight,
  },
})

export default Header
