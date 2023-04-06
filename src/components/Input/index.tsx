import React, { FC, useRef, useState } from 'react'
import {
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'

import AnimatedPlaceholder from './AnimatedPlaceholder'
import { COLORS } from '@src/res'

type Props = TextInputProps & {
  contentContainer?: StyleProp<ViewStyle>
  infoText?: string
  infoTextStyle?: StyleProp<TextStyle>
}

const INPUT_HEIGHT = 56
const COLLAPSED_HEIGHT = 20

const Input: FC<Props> = ({
  contentContainer,
  placeholder,
  placeholderTextColor,
  infoText = undefined,
  ...props
}) => {
  const ref = useRef<TextInput>(null)

  const [text, setText] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [inputPointerEvents, setIPE] = useState<
    'box-none' | 'none' | 'box-only' | 'auto' | undefined
  >('none')

  const _onFocus = () => {
    console.debug('on-focus->')
    setIPE('auto')

    setCollapsed(true)
  }

  const _onBlur = () => {
    //console.debug('on-blur->')

    if (text.length === 0) {
      setIPE('none')
      setCollapsed(false)
    }
  }

  const _onClickPlaceHolder = () => {
    ref.current?.focus()
  }

  return (
    <View style={[styles.contentContainer, contentContainer]}>
      <View style={styles.container}>
        <TextInput
          ref={ref}
          pointerEvents={inputPointerEvents}
          {...props}
          value={text}
          placeholder=""
          onChangeText={setText}
          onFocus={_onFocus}
          onBlur={_onBlur}
          style={styles.input}
        />
        <AnimatedPlaceholder
          inputHeight={INPUT_HEIGHT}
          collapsedHeight={COLLAPSED_HEIGHT}
          placeholder={placeholder}
          collapsed={collapsed}
          onClickPlaceHolder={_onClickPlaceHolder}
        />
      </View>
      {infoText && <Text style={styles.info}>{infoText}</Text>}
    </View>
  )
}

const styles = ScaledSheet.create({
  contentContainer: {
    paddingHorizontal: '16@ms',
    //height: INPUT_HEIGHT,
    //backgroundColor: 'green',
  },
  container: {
    width: '100%',
    height: INPUT_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'flex-end',
  },
  input: {
    fontSize: 16,
    width: '100%',
    //backgroundColor: 'red',
    height: INPUT_HEIGHT - COLLAPSED_HEIGHT,
    fontWeight: '500',
    paddingHorizontal: '16@ms',
  },
  info: {
    fontSize: 12,
    color: COLORS.grey3,
    marginTop:'8@ms'
  },
})

export default Input
