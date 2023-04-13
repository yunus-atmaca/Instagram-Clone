import React, { FC, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Animated, {
  Extrapolation,
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated'
import { TabView, SceneMap } from 'react-native-tab-view'

import { STYLES } from '@src/res'

import SelfMedia from './SelfMedia'
import TaggedMedia from './TaggedMedia'
import TabBar from './TabBar'
import {
  PERSISTENT_HEADER_HEIGHT,
  USER_INFO_HEIGHT,
  BUTTONS_HEIGHT,
} from '../Constant'

const cHHeight = USER_INFO_HEIGHT + BUTTONS_HEIGHT

const renderScene = SceneMap({
  self: SelfMedia,
  tag: TaggedMedia,
})

type Props = {
  scrollValue: SharedValue<number>
}

const Media: FC<Props> = ({ scrollValue }) => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'self', title: 'Self' },
    { key: 'tag', title: 'Tag' },
  ])

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
    <Animated.View
      onTouchStart={() => {
        console.debug('TABS is being click')
      }}
      style={[styles.container, animatedStyles]}>
      <TabView
        renderTabBar={props => <TabBar {...props} />}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: STYLES.S_WIDTH }}
      />
    </Animated.View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'yellow',
    marginTop: PERSISTENT_HEADER_HEIGHT + USER_INFO_HEIGHT + BUTTONS_HEIGHT,
  },
})

export default Media
