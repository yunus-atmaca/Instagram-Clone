import React, { FC } from 'react'
import { View } from 'react-native'
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
  avatar: string
}

const Header: FC<Props> = ({ avatar }) => {
  return (
    <View style={[styles.container]}>
      <UserInfo avatar={avatar} />
      <Buttons />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    //marginTop: PERSISTENT_HEADER_HEIGHT,
    width: '100%',
    height: cHHeight,
  },
})

export default Header
