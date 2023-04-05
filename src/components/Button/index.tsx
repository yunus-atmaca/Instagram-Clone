import React, { FC } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleProp,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {
  text?: string
  contentContainer?: StyleProp<ViewStyle>
  buttonContainer?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Button: FC<Props> = ({
  text = 'Button',
  contentContainer,
  buttonContainer,
  textStyle,
}) => {
  return (
    <View style={[styles.contentContainer, contentContainer]}>
      <TouchableOpacity style={[styles.container, buttonContainer]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  contentContainer: {
    height: '48@ms',
    paddingHorizontal: '16@ms',
  },
  container: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
})

export default Button
