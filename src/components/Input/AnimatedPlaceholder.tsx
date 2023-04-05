import React, { FC, useEffect, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

type Props = {
  placeholder?: string
  inputHeight: number
  collapsedHeight: number
  collapsed: boolean
  onClickPlaceHolder: () => void
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedText = Animated.createAnimatedComponent(Text)

const ANIM_DURATION = 100

// text size
const T_SIZE = 16
// collapsed text size
const CT_SIZE = 12

const AnimatedPlaceholder: FC<Props> = ({
  placeholder = '',
  inputHeight,
  collapsedHeight,
  collapsed,
  onClickPlaceHolder,
}) => {
  const [tColor, setTColor] = useState('grey')

  const height = useSharedValue(inputHeight)
  const animatedHeight = useAnimatedStyle(() => {
    return {
      height: height.value,
    }
  })

  const fontSize = useSharedValue(T_SIZE)
  const animatedFontSize = useAnimatedStyle(() => {
    return {
      fontSize: fontSize.value,
    }
  })

  useEffect(() => {
    console.debug('collapsed -> ', collapsed)

    /*if (!collapsed) {
      height.value = inputHeight
      fontSize.value = T_SIZE
    } else {
      animation(collapsed)
    }*/

    animation(collapsed)

    return () => {
      height.value = inputHeight
      fontSize.value = T_SIZE
    }
  }, [collapsed])

  const animation = (collapsed: boolean) => {
    console.debug('animation => ', collapsed)
    const onFinishAnimation = () => {
      //onFinishAnim()
    }

    height.value = withTiming(collapsed ? collapsedHeight : inputHeight - 1, {
      duration: ANIM_DURATION,
      easing: Easing.linear,
    })

    fontSize.value = withTiming(
      collapsed ? CT_SIZE : T_SIZE,
      { duration: ANIM_DURATION, easing: Easing.linear },
      finished => {
        if (finished) {
          ;('worklet')
          runOnJS(onFinishAnimation)()
        }
      },
    )
  }

  const _onClickPlaceHolder = () => {
    onClickPlaceHolder()
  }

  return (
    <AnimatedTouchableOpacity
      onPress={_onClickPlaceHolder}
      activeOpacity={1}
      style={[styles.container, animatedHeight]}>
      <AnimatedText style={[styles.text, { color: tColor }, animatedFontSize]}>
        {placeholder}
      </AnimatedText>
    </AnimatedTouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    //backgroundColor: 'purple',
    paddingHorizontal: '16@ms',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: T_SIZE,
    fontWeight: '500',
  },
})

export default AnimatedPlaceholder
