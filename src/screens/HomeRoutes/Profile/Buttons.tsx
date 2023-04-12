import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { COLORS, STYLES } from '@src/res'
import { BUTTONS_HEIGHT } from './Constant'

type Props = {}

const B_Button_WIDTH = (STYLES.W_WIDTH - moderateScale(32 + 24 + 28)) / 2

const Buttons: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.button, { width: B_Button_WIDTH }]}>
        <Text style={styles.text}>Edit profile</Text>
      </View>
      <View style={[styles.button, { width: B_Button_WIDTH }]}>
        <Text style={styles.text}>Share profile</Text>
      </View>
      <View style={[styles.button, { width: moderateScale(32) }]}>
        <AntDesign name="adduser" size={16} />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: BUTTONS_HEIGHT,
    paddingHorizontal: '16@ms',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '8@ms',
  },
  button: {
    backgroundColor: COLORS.grey5,
    height: '28@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8@ms',
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
})

export default Buttons
